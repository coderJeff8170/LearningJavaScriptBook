//Weak maps are like maps except: 

/* 
    Keys must be objects
    keys can be garbage collected
    A weakmap cannot be iterated or cleared
 */

//JS will keep an object in memory for as long as there's reference to it.
//eg if you have an object that's a key in a map, JS will keep that obj in memory as 
//long as that map exists.
//Not so with weakMap. Because of this, a weakMap can't be iterated as there may
//be conflict as an object is garbage collected.

//Because of these properties, weakmap is ideal for storing private keys in object instances:

const SecretHolder = (function() {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }
})();
//WeakMap is inside an IIFE along with a class that uses it.
//Outside the IIFE we get a class called SecretHolder whose instances can store secrets.
//we can only set a secret using setSecret() method and only get a secret with getSecret().

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());

console.log(a);//{}
console.log(`${a}`);//[object Object]

//it's totally unavailable any other way than set or get.
