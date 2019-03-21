//The THIS Keyword!

const b = {
    name: "Buddy",
    speak() { return `My name is ${this.name}`;},
}
 //notice even the last item in an object sports a comma
 //'this' keyword - speak() not bound to o, speak() called on o.

console.log(b.speak()); // My name is Buddy
//console.log(speak());   // not defined

//read up on the `this` keyword as it's one of those things that trips up noobs

// const j = {
//     name: 'Jeff',
//     greetBackwards: function() {
//         function getReverseName() {
//             let nameBackwards = '';
//             for(let i=this.name.length-1; i>=0; i--){
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };

// console.log(j.greetBackwards());

//we're not in strict mode here, so it throws an error that can't read property length of undefined
//because keyword `this` is binding to i?

//anyway, a solution to this problem is to assign a second variable to `this`:

const j = {
    name: 'Jeff Andrews',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

console.log(j.greetBackwards());

//make sure this second variable is used wherever you'd expect to see `this` keyword

//arrow notation

const f1 = function() { return "hello!"};
//or
const f2 = () => "hello!";
//same thing basically
console.log(f1());
console.log(f2());
