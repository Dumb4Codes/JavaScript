class Car{
    constructor(power, make){
        this._gas = 23.5;
        this._power = power;
        this._make = make;
    }

    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 *100}%)`;
    }
    get make(){
        return this._make;
    }
    set gas(value){
        if(value>50){
            value = 50;
        }
        else if(value<0){
            value = 0;
        }
        return this._gas = value;
    }
}

const car = new Car(400,"Chevrolet");

car.gas = 42342;

console.log(car.make);

console.log(car.power);
console.log(car.gas);