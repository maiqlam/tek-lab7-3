/* Hamster Class
Create a `Hamster` class with the following requirements met:
- Attributes:
    - `owner` - string, initially set as an empty string.
    - `name` - string, set the `name` from a parameter in the constructor method.
    - `price` - integer, set as `15`.
- Methods:
    - `wheelRun()` - log "squeak squeak".
    - `eatFood()` - log "nibble nibble".
    - `getPrice()` - return the price. */

class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price
    }
}

const Hamtaro = new Hamster("Hamtaro");
console.log(Hamtaro);
Hamtaro.wheelRun();
Hamtaro.eatFood();
console.log(Hamtaro.getPrice());

/* Create a `Person` class with the following requirements met:
- Attributes:
    - `name` - set `name` from a parameter in the constructor method.
    - `age`- initially 0
    - `height` - initially 0
    - `weight` - initially 0
    - `mood` - integer starting at 0 initially
    - `hamsters` - empty array initially
    - `bankAccount` - initially set to 0
- Methods:
    - `getName()` - returns `name`.
    - `getAge()` - returns `age`.
    - `getWeight()` - returns `weight`.
    - `greet()` - logs a message with person's `name`.
    - `eat()` - increment `weight`, increment `mood`.
    - `exercise()` - decrement `weight`.
    - `ageUp()` - increment `age`, increment `height`, increment `weight`, decrement `mood`, increment `bankAccount` by 10 (birthday money).
    - `buyHamster(hamster)` - push the `hamster` object onto the `hamsters` array, increment `mood` by 10, decrement `bankAccount` by the value of the `hamster` (hint: use `getPrice()`). */

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello! My name is ${this.name}.`);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        hamster = new Hamster("Mr. Smore"); 
        hamster.owner = this.name;
        this.hamsters.push(hamster.name);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const Mai = new Person("Mai")
Mai.eat();
Mai.ageUp();
Mai.buyHamster();
console.log(Mai);

