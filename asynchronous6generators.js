//weird, he's using node without discussing node - let's see if this works:

const fs = require('fs');

fs.writeFile('a.txt', 'jeff is awesome', function(err){
    if(err) return console.log('Error writing to file');
});
fs.writeFile('b.txt', 'jeff is cool', function(err){
    if(err) return console.log('Error writing to file');
});
fs.writeFile('c.txt', 'jeff is badass', function(err){
    if(err) return console.log('Error writing to file');
});


//generators allow two way communication between a function and it's caller. Generators are synchronous, but when used with promises, they provide a good way to manage asynchronous code in JS..

//consider the problem of reading three files, delaying for one minute, then writing the contents to a fourth file... check out this pseudocode:

    //dataA = read contents of 'a.txt'
    //dataB = read contents of 'b.txt'
    //dataC = read contents of 'c.txt'
    //wait 60 secs
    //write dataA + dataB + dataC to 'd.txt'

//generators enable us to do something like this, but they need some help to do it, specifically turning Node's error-first callbacks into promises (with a nfcall(nodefunction call))

    function nfcall(f, ...args) {
        return new Promise(function(resolve, reject) {
            f.call(null, ...args, function(err, ...args) {
                if(err) return reject(err);
                resolve(args.length<2? args[0] : args);
            });
        });
    }
//this function is named after and based on the nfcall method in the Qpromise library - if you need it, use the library, because it has other functions too, but this ^^ is for peeking under the hood...

//now, we can convert any Node-style method that takes a callback into a promise..
//we'll need setTimeout, which takes a callback. Because it is older than Node, it doesn't have the error first convention.. So, we'll create a timeout promise, ptimeout:

function ptimeout(delay) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, delay);
    });
}

//in addition to this we need a 'generator runner'. Because generators allow the function to communicate with the caller, we create a function that will manage that..

function grun(g) {
    const it = g();
    (function iterate(val){
        const x = it.next(val);
        if(!x.done) {
            if(x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            }else{
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}

//author says this is a very modest recursive generator runner. Basically, as complex as it looks, you just pass it a generator function, and it'll run it. Generators that call 'yield' will pause until next is called on the iterator. Recursively in this case. All of this enables us to plug in something very much like the pseudocode, using nfcall to marry the past (node error first callbacks) to the present (promises)

function* theFutureIsNow() {
    const dataA = yield nfcall(fs.readFile, 'a.txt');
    const dataB = yield nfcall(fs.readFile, 'b.txt');
    const dataC = yield nfcall(fs.readFile, 'c.txt');
    yield ptimeout(60*100);
    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
}
grun(theFutureIsNow);
//that is really cool!