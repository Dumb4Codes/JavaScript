const car = {
    model: "Mustang", 
    color: "red",
    year: 2023,

    drive(){
        console.log(`You drive the ${this.model}`);
    },
    brake(){
        console.log("You stepped on the brakes with color "+this.color);
    }
}

const car2 = {
    model: "Corvette", 
    color: "blue",
    year: 2024,

    drive(){
        console.log("You drive the car");
    },
    brake(){
        console.log("You stepped on the brakes");
    }
}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car.drive();
car.brake();