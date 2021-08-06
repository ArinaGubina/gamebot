'use strict';

let isNumber = function(n) {
    return !isNaN( parseFloat(n) ) && isFinite(n);
};

let userNumber;

function num() {
    let botNumber = Math.round(Math.random() * 100 + 1);

    function start() {
        userNumber = prompt('Угадай число от 1 до 100');
        if(userNumber === null || userNumber === undefined) {
            alert('Игра окончена! Задуманное число = ' + botNumber);
            return false;
        }
        if ( !isNumber(userNumber) ) {
            if (confirm("Введи число!")) {
                start();
            } else {
                alert('Игра окончена! Задуманное число = ' + botNumber);
                return false;
            }       
        } else {
            if (+userNumber === botNumber) {
                alert('Поздравляю, Вы угадали!!! Задуманное число = ' + botNumber);
                return true;
            } else if (userNumber > botNumber) {
                alert('Загаданное число меньше');
                start();
            } else if (userNumber < botNumber) {
                alert('Загаданное число больше');
                start();
            }
        }
    }
    console.log(start());
}
num();