// consider the following code:

var i;
for(i=5; i>=0; i--) {
    console.log(`the value is ${i}`);
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}

//the function passed to setTimeout() will not run until the looping is done! Why? Scope?
//we can use an IIFE to solve the problem, 