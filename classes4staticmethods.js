//static methods - in this method, instead of `this` being bound to the instance of a class,
//`this` is bound to the class itself.

//in following the car example, making a VIN. It doesn't make sense to let an
//individual car set it's own vin, therefore, a static method for doing so would
//be ideal.

class Car {
    static getNextVin() {
        return Car.nextVin++;
        //we could say `this.nextVin++`, but here, we emphasize
        //that nextVin belongs to Car and is therefore static.
    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2) {
        return car1.make===car2.make && car1.model===car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin===car2.vin;
    }
}
Car.nextVin = 0;

const car1 = new Car('Tesla', 'S');
const car2 = new Car('Mazda', '3');
const car3 = new Car('Mazda', '3');

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

//now make one that creates an actual vehicle style vin!!

console.log(Car.areSimilar(car1, car2));//false. Not even make and model are same.
console.log(Car.areSimilar(car2, car3));//true, the make and model, but not VIN are the same
console.log(Car.areSame(car2, car3));//false; even though they are same make and model, not same car; Vin is different.
console.log(Car.areSame(car2, car2));//true; these are the same car; make, model and vin are same.

//now make one that creates an actual vehicle style vin!!
