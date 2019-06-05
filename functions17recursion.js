//recursion is when a function calls itself!
//which is particularly powerful when the function does the same thing with progressively
//smaller sets of input.

//pseudocode: find needle in haystack.

//if you can see the needles, go to step 3
//remove piece of hay; go to step 1
//done!
let i = 0;
function findNeedle(haystack) {
    
    if(haystack.length === 0) return "no needle here!";
    if(haystack.shift() === 'needle') return `found the needle after removing ${[i]} bails of hay!`;
    return (i++, findNeedle(haystack));
    
}

console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay', 'hay', ]));

//fine. now make it tell u where the needle was - stupid, but gotta declare i outside of recursion.
//there are better ways to do this. Recursion illustration was the point tho.

//a more useful and common use of recursion is the classic finding the factorial of a number:

function fact(n) {
    if (n === 1) return 1;
    return n * fact(n-1);
}

console.log(fact(4));