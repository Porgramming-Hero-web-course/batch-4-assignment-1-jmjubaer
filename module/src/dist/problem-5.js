"use strict";
const getProperty = (object, propertyName) => {
    return object[propertyName];
};
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // results is Alice
