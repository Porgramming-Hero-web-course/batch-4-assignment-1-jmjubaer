"use strict";
{
    //
    const validateKeys = (object, keys) => {
        return keys.every((key) => key in object);
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"])); // true
    //
}
