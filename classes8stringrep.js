//all objects in JavaScript are instance of the root class `Object`. For any object o, 
//o instanceof Object will be true unless you fuck with the __proto__ property, which, 
//can you don't?

//Since every object inherits from Object, the methods on Object are available to all 
//objects by default. And since classes are objects....

//consider the toString() method - we can add that to the Truck constructor class to tell
//us something useful about that class - for instance to return the make, model and Vin:





class Truck {
    static getNextVin() {
            var nextVin = 0;
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 12; i++)
              nextVin += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return nextVin;//returning the variable
          }
    
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Truck.getNextVin();//calling the function
    }
    static areSimilar(truck1, truck2) {
        return truck1.make===truck2.make && truck1.model===truck2.model;
    }
    static areSame(truck1, truck2) {
        return truck1.vin===truck2.vin;
    }
    toString() {//this is the added functionality
        return `${this.make} ${this.model} ${this.vin}`;
    }
}
//Truck.nextVin = "";

const truck1 = new Truck('Ford', 'F150');
const truck2 = new Truck('Toyota', 'Kingcab');
const truck3 = new Truck('Toyota', 'Kingcab');

console.log(truck1.toString());//gotta call that function!

//so the book says toString() is a method that inherits from Object,
//but if you name it something else, it still does the same thing. What the hell?