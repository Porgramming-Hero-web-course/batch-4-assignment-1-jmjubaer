"use strict";
const sumArray = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
const array = [1, 2, 3, 4, 5];
const result = sumArray(array);
console.log(result); // result is 15
