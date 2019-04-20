const Car = (function() {

    const carProperties = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D', ];
            carProperties.set(this, { userGear: this._userGears[0] });
        }

        get userGear() { return carProperties.get(this).userGear; }
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0 )
            throw new Error(`invalid gear: ${value}`);
            carProperties.get(this).userGear = value;
        }

        shift(gear) {this.userGear = gear;}
    }

    return Car;
})();

//when you refer to methods that are available on instances of a class, you are referring to 
//prototype methods. 

//every instance has access to it's prototype, and JS checks the instance for the method 
//first before proceeding up the chain to see if it's there. If you change the method
//or add something to it, it becomes the property of the instance and JS will invoke it there
//instead of at the class level..

const car1 = new Car();
const car2 = new Car();

console.log(car1.shift === Car.prototype.shift);//true,  at this point, there is no shift
//that belongs to car1, so JS looks at the classconstructor. Therefore car1.shift is the prototype.
console.log(car1.shift('D'));//returns undefined as it's just invoking a function
//that doesn't return anything, just causing shift to change userGear of car1 to 'D'
/* console.log(car1.shift('d')); *///errors
console.log(car1.userGear);// D 
console.log(car1.shift === car2.shift);//true - both prototype - same as class constructor

car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
//car1.shift = gear => this.userGear = gear.toUpperCase(); //<= why doesn't this work?

//functionality added to the instance to 
//convert a lowercase entry to uppercase - this way it won't throw an error. This functionality is only available
//to the instance. Question: Does car1 now have it's own shift method?
//^^this is 'dynamic dispatch' in action.

console.log(car1.shift === Car.prototype.shift);//false. I guess question answered.
console.log(car1.shift === car2.shift);//false - nothing changed on the instance of car2, but it did on car1.

car1.shift('r');
console.log(car1.userGear);
console.log(car2.userGear);


console.log(car1);
console.log(car2);

