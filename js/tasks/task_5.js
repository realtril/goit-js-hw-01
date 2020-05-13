'use strict';

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

let message;
let price;
let userChoice = prompt('Пожалуйста, введите название страну для доставки!');

if (userChoice === null) {
  message = 'Очень жаль, ждем Вас в следующий раз!';
} else {
  switch (userChoice.toLowerCase()) {
    case china:
      message = `Доставка в ${china} будет стоить ${(price = 100)} кредитов`;
      break;

    case chile:
      message = `Доставка в ${chile} будет стоить ${(price = 250)} кредитов`;
      break;

    case australia:
      message = `Доставка в ${australia} будет стоить ${(price = 170)} кредитов`;
      break;

    case india:
      message = `Доставка в ${india} будет стоить ${(price = 80)} кредитов`;
      break;

    case jamaica:
      message = `Доставка в ${jamaica} будет стоить ${(price = 120)} кредитов`;
      break;

    default:
      alert('В вашей стране доставка не доступна.');
      break;
  }
}

console.log(message);
