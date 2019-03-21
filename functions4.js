//modification
function f(o) {
    o.message = `set in f (previous value: '${o.message}')`;
}
//function declared
let o = {
    message: "initial value"
};//object "o" declared with attribute and value
console.log(`before calling f: o.message="${o.message}"`);
//value of attribute message called within object "o" and logged (outside of function)
f(o);
//function f called on object "o"
//function changes value of attribute message within "o"
console.log(`after calling f: o.message="${o.message}"`);
//new value of attribute "message" within "o" logged after being changed by function
//note that an object can be changed outside of a function by code within
//that function, as opposed to a primitive value, which cannot.