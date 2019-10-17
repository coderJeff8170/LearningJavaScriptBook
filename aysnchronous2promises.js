//callback is the phone number you give
//promises are the pager they give you
//something you have that will alert you when something is done
//you still have to use callbacks with promises
//soo, you'd give something and be given something? I think I need a different analogy..

//promises simply ensure that callbacks are handled in a predictable manner.
//when you call a promise-based asynch function, it returns a 'Promise' instance.
//only two things can happen with that promise:
//it can be fulfilled(success), or rejected(failure) - you are guaranteed that only one of these will happen
//once, and then the promise is considered 'settled'

//a promise instance is an object, and can therefore be passed around...
//if you want to start some asynch code and let someone else handle the result you can pass
//off the promise.

//creating a promise:
//you create a Promise instance with resolve and reject callbacks

/* function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>=0; i--) {
            setTimeout(function() {
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}

//countdown(5);
//doesn't currently work... in node.js
//works great in the browser..
countdown(5).then(
    function() {
        console.log("countdown completed successfully")
    },
    function err() {
        console.log("countdown experienced an error: " + err.message);
    }
); */

//lets further modify - a variable for demonstration of how promises work with 'catch':

/* function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>=0; i--) {
            setTimeout(function() {
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
} */

const p = countdown(14);

p.then(function() {
        console.log("countdown completed successfully")
    });
p.catch(function err() {
        console.log("countdown experienced an error: " + err.message);
    });

//and then modify our countdown function to add a rejection promise:

function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>=0; i--) {
            setTimeout(function() {
                if(i===13) return reject(new Error("DEFINITELY NOT COUNTING THAT!!"));
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}

//pretty damned cool - still counts down even after error event.