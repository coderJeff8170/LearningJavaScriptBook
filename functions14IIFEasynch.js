// consider the following code:

/* var i;
for(i=5; i>=0; i--) {
 //   console.log(`the value is ${i}`);
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
} */
//this will print -1 six times!


//the function passed to setTimeout() will not run until the looping is done! Why? Scope?
//we can use a named function to solve the problem...

function loopBody(i) {
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}
var i;
for(i=5; i>=0; i--) {
    loopBody(i);
}

//here, at each step in the loop, the function 'loopBody' is invoked. What makes this different
//is that the value of i is passed into the function, not i itself. Each time the loop
//operates, the value of i is 1 less than the last time, until it reaches 0.

//only one problem left - creating a named function for loops that are only going to be used
//one time can get tedious. Enter the IIFE! It will create an anonymous function that is invoked
//immediately. 

var b;
for(b=5; b>=0; b--) {
    (function(b) {
        setTimeout(function() {
            console.log(b===0 ? "go!" : b);
        }, (5-b)*1000);
    })(b);
}
//what's crazy here is that both of these run at the same time, so the output is concurrent
// 55 44 33 22 11 gogo! nuts!

//block scoped variables, however, solve this problem with much more elegance:

for(let c=5; c>=0; c--) {
    setTimeout(function() {
        console.log(c===0 ? "go" : c);
    }, (5-c)*1000);
}

for(var d=5; d>=0; d--) {
    setTimeout(function() {
        console.log(d===0 ? "go" : d);
    }, (5-d)*1000);
}//very interesting! see the difference with let and var!