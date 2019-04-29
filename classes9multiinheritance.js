//some OO languages have multiple inheritance where a class can inherit properties and methods
//from more than one Superclass. This can cause conflicts if both parents have a prop or method
//with the same name - that's called a collision.

//languages that don't have MI, have 'interfaces', for example a car can only inherit from vehicle,
//but it may have interfaces such as 'container' 'insurable' 'loan' that it would share
//with other objects that aren't vehicles.

//JS is sort of a blend. It's technically a single inheritance language, because JS only 
//looks for one parent in the prototype chain.

//JS uses 'mixins' to go around the single inheritance problem. Let's illustrate this on the
//insurable concept of car. We'll make a new Insurance Policy class and mixin (not sure exactly
//what the mixin is at this point)

class InsurancePolicy {}//suspect - author had class InsurancePolicy() {}

    function makeInsurable(o) {
        o.addInsurancePolicy = function(p) { this.insurancePolicy = p;}
        o.getInsurancePolicy = function() {return this.insurancePolicy;}
        o.isInsured = function() {return !!this.insurancePolicy;}
    }//is this the mixin?? an external function?

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

//makeInsurable(Car);
//const car1 = new Car();
//car1.addInsurancePolicy(new InsurancePolicy());//car1.addInsurancePolicy is not a function

/* const car1 = new Car();
const car2 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());//works

console.log(car1.isInsured());//true

car2.addInsurancePolicy(new InsurancePolicy());//throws error
console.log(car2.isInsured());//won't even get here */

//you'd have to insure every car individually!! note car2 hasn't been "made insurable"
//solution:

makeInsurable(Car.prototype); //jesus christ.
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());

console.log(car1.isInsured());//true

//if you're having trouble with collisions, which Mixins don't solve,
//you could ask the folk working on the other class to use SYMBOLS:

//Because symbols are unique, there is no chance of property collision;
//the insurance policy class could look like this:

class LorryInsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function insureLorry(a) {
    a[ADD_POLICY] = function(m) { this[_POLICY] = m; }
    a[GET_POLICY] = function() {return this[_POLICY]; }
    a[IS_INSURED] = function() {return !!this[_POLICY];}
}


class Lorry {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

insureLorry(Lorry.prototype);
const lorry1 = new Lorry();
lorry1[ADD_POLICY](new LorryInsurancePolicy());

//console.log(lorry1.IS_INSURED());doesn't work - why? - symbols gotta be inside sqbrkts?
console.log(lorry1[IS_INSURED]());//devil of a time getting this to work



