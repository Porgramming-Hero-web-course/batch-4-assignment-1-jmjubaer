type GetProperty = <T, K extends keyof T>(object: T, property: K) => T[K];

const getProperty: GetProperty = (object, propertyName) => {
    return object[propertyName];
};


const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));