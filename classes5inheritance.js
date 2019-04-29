//if you call a method on an instance, JS will check one step up the prototype chain until
//it finds the method or errors out. This is called inheritance: The instance will inherit 
//properties and methods of it's class and superclass, etc.

//to continue the car example, consider that cars have airbags and passengers, but boats
//would only share the passengers property. This shows the need for a Vehicle superclass:

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

class Boat extends Vehicle {
    constructor() {
        super();
        console.log("Boat created");
    }
}

//notice that when you create a subclass you need the `extends` keyword
//and the `super()` method. Without either of these, a subclass won't be created.

const v = new Vehicle();
v.addPassenger("Marley");//only takes one parameter?
v.addPassenger("Sophia");
console.log(v.passengers);
const c = new Car();
c.addPassenger("Buddy");
c.addPassenger("Nilla");
console.log(c.passengers);
//v.deployAirbags(); error
c.deployAirbags();

//instances of the Car and Boat class can access all methods of the Vehicle class,
//but not the other way around. This is inheritance.