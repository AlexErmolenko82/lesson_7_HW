"use strict"

//1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. Для решения задачи необходим использовать рекурсию.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// Пример работы функции:

// const sumTo = (n) => {
//     if (n === 1 ) {return n;}
//     else {return n + sumTo(n - 1);}
// }

// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(5));
// console.log(sumTo(6));
// console.log(sumTo(7));
// console.log(sumTo(8));
// console.log(sumTo(9));

//2. Написать функцию findShort , которая будет находит самое короткое слово в предложении. В случае если длина двух слов совпадает - вернуть первое найденое короткое слово. Пример работы функции:
//Разбить строку по разделителю " " -> получим массив слов
//Отсортировать этот массив по длине строк
//Взять самый первый элемент у этого отсортированного массива

function findShort(sentance){
    const arrWords = sentance.split(" ").sort((a, b) => {
        return a.length - b.length;
        });
    return arrWords[0];
}

const sentance = "lorem ipsum dolor sito amet consectetur adipiscing elit sedu duo eiusmod tempor incididunt unt labore";

console.log(findShort(sentance)); // duo
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is