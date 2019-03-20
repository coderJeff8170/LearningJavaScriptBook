function avg(a, b) {
    return (a + b)/2;
}
//the arguments, or parameters, a and b, exist only within the function!
//we can assign the parameters outside the function, then call the function:
const a = 6, b = 58;
avg(a, b);
//since a and b are now defined outside the function there will be result of 32
//a and b outside the function are totally separate variables from inside the function

