'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let result = prompt('Пожалуйста, введите пароль.', 'Введите пароль.');

if (result === null) {
  message = 'Отменено пользователем!';
} else if (result === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
