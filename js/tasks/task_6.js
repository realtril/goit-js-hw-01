'use strict';

let input;
let total = 0;

do {
  input = prompt('Пожалуйста, введите число.');
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = parseInt(input);
  if (isNaN(input)) {
    continue;
  }
  total = total + input;
  console.log('total: ', total);
} while (input !== null);
