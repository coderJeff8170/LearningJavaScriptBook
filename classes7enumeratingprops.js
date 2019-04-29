class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    
    }
}

//valid, but not a good idea vvvvv
Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj) {
    console.log(`${p}: ${obj[p]}` +
        (obj.hasOwnProperty(p) ? '' : ' (inherited)') );
}//^^ this outputs the name of the property and it's result and also validates
//whether it has it's own property or not - a good way to catch the sneaky stuff!
//if it's a property not belonging to it (in this case, sneaky belongs to the prototype)
//it'll throw inherited - drill into this - why isn't isSuper considered inherited?
//oh, it's an instance that has all the properties inside Super...

