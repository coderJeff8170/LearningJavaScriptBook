//class refers to a generic thing, and an instance refers to a specific thing

//a piece of functionality is called a method (a function that belongs to an instance)
//and a piece of functionality that is related to the class (but not a specific instance
//is called a class method)

//a constructor is a function that initializes an object class instance.

//the syntax is thus: 


/* class Car {
    constructor() {

    }
} */

//once a class is created, specific instances of that class can be created.
//the syntax for this is:

/* const car1 = new Car();
const car2 = new Car(); */

//you can check to see if an instance belongs to a class by usinig the instanceof operator.

/* console.log(car1 instanceof Car); //true
console.log(car1 instanceof Array); //false */

//we can add properties and functions to the car class constructor:

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = [ 'P', 'N', 'R', 'D' ];
        this.userGear = this.userGears[0]; //default is park!
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
            this.userGear = gear;
    }
}

//the `this` keyword is being used to refer to the instance on which the method is evoked
//it's a placeholder until the name of the new Car instance is known...

//at first glance this seems complicated, and indeed, class properties should, imho, be
//introduced first, without class methods, esp when those class methods involve things
//that haven't quite sunk in yet! But I digress...

//here, shift() is a class method which allows any instance of car to shift gears.
//notice that in the constructor, there are only two parameters, but four properties  ASK ABOUT THIS
//^^ they're not in the parameters because they're defaults. They can, however be set directly
//on an instance...

//in addition to the constructor function, which is called every time we make a new instance,
//we've added another funtion called shift, which, as a function belonging to Car, is a method

const car1 = new Car("Honda", "Civic");
const car2 = new Car("Tesla", "Model S");
car1.shift('D');
car2.shift('P');

//when we invoke car1.shift('D') `this` is bound to car1. It's bound to any instance created
//by car when it's accessed by any part of Car

console.log(car1.userGear);//D
console.log(car2.userGears.indexOf(gear));




