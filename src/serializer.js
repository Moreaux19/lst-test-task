export function serialize(numbers) {
  const bits = [];
  for (const n of numbers) {
    if (n < 1 || n > 300) throw new Error('Число вне диапазона 1-300');
    let val = n - 1;
    const bitsArr = [];
    for (let i = 0; i < 9; i++) {
      bitsArr.push(val & 1);
      val >>= 1;
    }
    bits.push(...bitsArr.reverse());
  }

  const bytes = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) {
      if (i + j < bits.length) byte = (byte << 1) | bits[i + j];
      else byte <<= 1;
    }
    bytes.push(byte);
  }

  const str = Buffer.from(bytes).toString('base64');
  return str;
}

export function deserialize(data) {
  const bytes = Buffer.from(data, 'base64');
  const bits = [];
  for (const b of bytes) {
    for (let i = 7; i >= 0; i--) {
      bits.push((b >> i) & 1);
    }
  }

  const numbers = [];
  for (let i = 0; i + 9 <= bits.length; i += 9) {
    let val = 0;
    for (let j = 0; j < 9; j++) {
      val = (val << 1) | bits[i + j];
    }
    numbers.push(val + 1);
  }

  return numbers;
}
