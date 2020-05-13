'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let message;
let quantity = prompt('Пожалуйста, введите желаемое количество.');
let totalPrice;

if (quantity === null) {
  message = 'Отменено пользователем!';
} else if (isNaN(quantity) === false) {
  totalPrice = quantity * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    message = `Вы купили ${quantity} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`;
  }
} else {
  message = 'Пожалуйста, введите желаемое количество.';
}

alert(message);
