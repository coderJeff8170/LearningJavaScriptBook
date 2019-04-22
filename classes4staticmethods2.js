//now make one that creates an actual vehicle style vin!!

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
}
//Truck.nextVin = "";

const truck1 = new Truck('Ford', 'F150');
const truck2 = new Truck('Toyota', 'Kingcab');
const truck3 = new Truck('Toyota', 'Kingcab');

console.log(truck1.vin);
console.log(truck2.vin);
console.log(truck3.vin);

//had a devil of a time getting this to work, just didn't have the terminology right
//is it a problem if, every time you run it a new VIN is created?
//probably not, because you are constructing again each time.