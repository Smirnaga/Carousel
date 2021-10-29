'use strict';

const a = prompt ('Введите первое число');

const b = prompt ('Введите второе число');


 function calcSum () {
    let result = +a + +b;
    let answer = ('Сумма ваших чисел :  ' +  a + '+' + b + '=' + result);
    alert ( answer)
} ;

function calcdifference () {
    let result = a - b;
    let answer = ('Вычитание ваших чисел :  ' +  a + '-' + b + '=' + result);
    alert ( answer)
} ;

function calcmultiplication () {
    let result = a * b;
    let answer = ('Умножение ваших чисел :  ' +  a + '*' + b + '=' + result);
    alert ( answer)
} ;

function calcDivision () {
    let result = a / b;
    let answer = ('Деление ваших чисел :  ' +  a + '/' + b + '=' + result);
    alert ( answer)
} ;

calcSum ();
calcdifference ();
calcmultiplication ();
calcDivision ()