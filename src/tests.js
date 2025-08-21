import { serialize, deserialize } from './serializer.js';

const tests = [
  [1, 2, 3, 4, 5],
  Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 9 }, (_, i) => i + 1),
  Array.from({ length: 90 }, (_, i) => i + 10),
  Array.from({ length: 210 }, (_, i) => i + 91),
  Array.from({ length: 900 }, (_, i) => (i % 300) + 1)
];

function testing(nums) {
  const simple = nums.join(',');
  const compact = serialize(nums);
  const ratio = simple.length / compact.length;
  console.log(
    `Исходная длина: ${simple.length}, Сжатая: ${compact.length}, Коэффициент: ${ratio.toFixed(2)}`
  );
  const restored = deserialize(compact);
  const ok = restored.length === nums.length && restored.every((v, i) => v === nums[i]);
  if (!ok) console.error('Ошибка: десериализация не совпадает с исходными данными!');
}

for (const test of tests) {
  testing(test);
}
