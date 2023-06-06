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