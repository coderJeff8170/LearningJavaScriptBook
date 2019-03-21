//assignment
function f(o) {
    o.message = "set in f";
    o = {
        message: "new object!"
    };
    console.log(`inside f: o.message="${o.message}" (after assignment)`);
}
//function declared
let o = {
    message: 'initial value'
};
//object defined
console.log(`before calling f: o.message="${o.message}"`);
//before calling f, message o.message = initial value
f(o);
//f called with ARGUMENT "o" - same object as o declared outside of "f"
//f sets original o.message to = set in f
//f then declares another object with the same bloody name and attribute!
//because f has a console.log inside it, it will log at this time,
//declaring (and showing us) that o is actually a new object
console.log(`after calling f: o.message="${o.message}"`);
//log called outside of function on o.message reveals that f changed
//o.message's value to "set in f", again showing us that o declared outside
//the function and o declared within are totally different objects
//despite having the same name

//primitives are value types, because when passed around the value is copied
//objects are reference types, because when passed around they are REFERRED to.
