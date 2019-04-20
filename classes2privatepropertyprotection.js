/* there are several ways to protect the properties associated with a class constructor
from being accidentally changed. The first is to name them using underscores so that
they're easily spotted - this is protection by convention only.
The second is to use an instance of weakMap, enclosed by scope protection (an IIFE!)
we could just use an IIFE, but without a weakMap, private properties would never
go out of scope, even if the instances of them do. */

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

        shift(gear) {this.userGear = gear; }
    }

    return Car;
})

//the WeakMap, then, stores the properties we don't want accessed outside of the class.
//lets test this with an instance:



