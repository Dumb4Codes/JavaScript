//static = belong to the class, not the objects
//         properties: useful for caches, fixed configuaration
//         methods: useful for utility functions


class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars++;
    }

    static race(){
        console.log("3....2....1....GO!")
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lamborghini");

console.log(Car.numberOfCars);

Car.race();