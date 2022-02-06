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

const sentance = "lorem ipsum dolor sito amet consectetur adipiscing elit sed duo eiusmod tempor incididunt unt labore";

function findShort(sentance){
    let start = 0;
    let end;
    let minLenght = 100;
    let minItem;
    let arrWords = [];
    do {
        end = sentance.indexOf(" ", start);         //ищем " " в конце слова
        if (end === -1) {
                end = sentance.lenght;              // если не находит пробел, то это конец строки
            }
        arrWords.push(sentance.slice(start, end));  //добавляем вырезаное слово в массив
        start = end + 1;                            //задаём начальный индекс нового слова
        }
    while (end != sentance.lenght);

        arrWords.forEach(function(item, i, arr) {   //для каждого элемента массива считаем длину
            if (arrWords[i].length < minLenght) {
                minLenght = arrWords[i].length;     //фиксируем минимальную длину в переменную
                minItem = i;                        //фиксируем индекс минимального слова
            }
        });
    return arrWords[minItem];
}

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is