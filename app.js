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

/* Person Class
Create a `Person` class with the following requirements met:
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
        hamster = new Hamster(hamster); 
        hamster.owner = this.name;
        this.hamsters.push(hamster.name);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const Mai = new Person("Mai")
Mai.eat();
Mai.ageUp();
Mai.buyHamster("Mr. Smore");
console.log(Mai);
// Person {
//     name: 'Mai',
//     age: 1,
//     height: 1,
//     weight: 2,
//     mood: 10,
//     hamsters: [ 'Mr. Smore' ],
//     bankAccount: -5
//   }


// Create a Story
// 1. Instantiate a new `Person` named Timmy.
const Timmy = new Person("Timmy")

/* 
2. Age Timmy five years.
3. At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times to improve his mood.
4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times. */
for (let i = 0; i < 5; i++) {
    Timmy.ageUp();
    Timmy.eat();
    Timmy.exercise();
};
// console.log(Timmy);
// Person {
//     name: 'Timmy',
//     age: 5,
//     height: 5,
//     weight: 5,
//     mood: 0,
//     hamsters: [],
//     bankAccount: 50
//   }

// 5. Age Timmy 9 more years.
for (let i = 0; i < 9; i++) {
    Timmy.ageUp();
};
// console.log(Timmy);
// Person {
//     name: 'Timmy',
//     age: 14,
//     height: 14,
//     weight: 14,
//     mood: -9,
//     hamsters: [],
//     bankAccount: 140
//   }

// 6. Create a `Hamster` named "Gus."
const Gus = new Hamster("Gus")
// 7. Set Gus's owner to the string "Timmy."
Gus.owner = "Timmy";
// 8. Have Timmy "buy" Gus.
Timmy.buyHamster("Gus")

// console.log(Timmy);
// Person {
//     name: 'Timmy',
//     age: 14,
//     height: 14,
//     weight: 14,
//     mood: 1,
//     hamsters: [ 'Gus' ],
//     bankAccount: 125
//   }

// console.log(Gus);
// Hamster { owner: 'Timmy', name: 'Gus', price: 15 }

// 9. Age Timmy more 15 years.
for (let i = 0; i < 15; i++) {
    Timmy.ageUp();
};

// console.log(Timmy);
// Person {
//     name: 'Timmy',
//     age: 29,
//     height: 29,
//     weight: 29,
//     mood: -14,
//     hamsters: [ 'Gus' ],
//     bankAccount: 275
//   }

// 10. Have Timmy eat twice.
Timmy.eat();
Timmy.eat();

// console.log(Timmy);
// Person {
//     name: 'Timmy',
//     age: 29,
//     height: 29,
//     weight: 31,
//     mood: -12,
//     hamsters: [ 'Gus' ],
//     bankAccount: 275
//   }

// 11. Have Timmy exercise twice.
Timmy.exercise();
Timmy.exercise();

// console.log(Timmy);
// Person {
//     name: 'Timmy',
//     age: 29,
//     height: 29,
//     weight: 29,
//     mood: -12,
//     hamsters: [ 'Gus' ],
//     bankAccount: 275
//   }


/* Chefs Make Dinners
- `Chef` should be a factory of `Dinner`.
- Add a constructor to `Dinner` that sets the string properties: `appetizer`, `entree`, and `dessert`.
- Add a method on `Chef` that takes three arguments and returns a new `Dinner` based on those arguments.
- Have the `Chef` create three `Dinner`s, log the `Dinner`s. */

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    prepare(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert)
    }
}

const chefMai = new Chef();
const dinner1 = chefMai.prepare('bread and butter', 'spaghetti', 'tiramisu');
const dinner2 = chefMai.prepare('spring rolls', 'pho bo vien', 'che 3 mau');
const dinner3 = chefMai.prepare('bread rolls', 'brisket', 'ice cream');

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);