//polymorphism is Object Oriented parlance for treating an instance as a member 
//not only of it's own direct class, but also any superclasses that subclass
//may belong to.

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();//evokes superclass' constructor
        console.log("Car created");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        console.log("Motorcycle created");
    }
}

const c = new Car();
const m = new Motorcycle();

console.log(c instanceof Car);// true
console.log(c instanceof Vehicle);// true
console.log(m instanceof Car);// false
console.log(m instanceof Motorcycle);//true
console.log(m instanceof Vehicle);//true

//motorcycles and cars are instance of their own class and the Vehicle superclass