### Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

#### Why are Type Guards Necessary.


Type guards is important to prevent the runtime error. Sometimes we need to accept multiple types. In this situation we can handle the response base on type by using the type guard. We can handle the response behavior base on different different types. For example, we can create a function that accepts both strings and numbers types. Now we can return different different data base on types. In conclusion, type guard is powerful feature of typescript which can narrow down the type of a variable or expression to a more specific type, which can help our catch errors before they occur. It's also call type narrowing.

####  Various Types of Type Guards and Their Use Cases.

There are several way to type guard in typescript. Here are some examples.

##### 1. "typeof" Operator.

 Best for primitive types like string, number, and boolean.

 ``` javascript
 function print(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
 ```
##### 2. "in" Operator.

Checks if a property exists in an object, ideal for union types with shared properties.

```javascript
    type NormalUser = {
        name: string;
        age: number;
    }
    type AdminUser = {
        name: string;
        age: number;
        role: 'admin';
    }
    
        const getUserIdentity = (user: AdminUser| NormalUser) => {
        if ('role' in user) {
            console.log("I am admin");
            return 'Admin User'
        } else {
            console.log("I am a user");
            return 'Normal User'
        }
    }
```

##### 3. "instanceof " Operator.

Useful for checking if an object is an instance of a class.

```javascript
class Animal {
    name: string;
    species: string
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    constructor (name: string, species: string) {
        super(name, species);
    }
    makeBarkSound(){
        console.log("I am barking");
    }
}
class Cat extends Animal {
    constructor (name: string, species: string) {
        super(name, species);
    }
    makeMeowing(){
        console.log("I am Meowing");
    }
}

const getAnimal = (animal: Animal) => {
    if(animal instanceof Dog){
        dog.makeBarkSound();
    }else if(animal instanceof Cat) {
        cat.makeMeowing();
    }else {
        animal.makeSound();
    }
}
```
##### 3. Discriminated Unions.

Uses a shared property to identify each type in a union.

```javascript
type Circle ={
    shape: "circle",
    radius: number;
}
type Rectangle ={
    shape: "rectangle",
    width: number;
    height: number;
}
type Shape = Circle | Rectangle
const calculateShapeArea : CalculateShapeArea = (shape) => {
    if(shape.shape == "circle"){
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    }else if(shape.shape == "rectangle"){
        return shape.width * shape.height
    }else{
        return 0
    }
}
```
















