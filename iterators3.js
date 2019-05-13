//iterators work on objects that never run out of values also:
//in this case, the iterator will never return 'true' for 'done':

class FibonacciSequence {
    [Symbol.iterator] () {
        let a = 0, b = 1;
        return {
            next() {
                let rval = {value: b, done: false};
                b += a;
                a = rval.value;
                return rval;
            }
        };//muy importante!
    }
}

//if you aren't careful here you'll wind up with an infinite loop, and if you used
//a for loop, it'd be harder to stop(would it though?)

//sooooo....

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib) {
    console.log(n);
    if(++i > 9) break;//ooooooh! hahahah, clever.
}