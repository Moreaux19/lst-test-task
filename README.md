# Laboratory of System Techonolgies test task

Компактная сериализация/десериализация множеств чисел (1–300) в ASCII-строку.

## Особенности решения

- Каждое число кодируется 9 битами.
- Массив битов преобразуется в байты.
- Байты кодируются в Base64.
- Работает для 5–1000 чисел.
- Сжатие ~2× по сравнению с CSV (`join(",")`).

## Как запустить

```bash
git clone git@github.com:Moreaux19/lst-test-task.git
cd compact-serializer-js
node src/tests.js
```
