//destructuring objects
function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
//function getSentence is assigned three object properties as it's arguments
//it will return the values of these properties on any object that has them'
//and is used as argument when gs is called
//if any property of an object doesn't match it'll be assigned the value "undefined"
const o = {
    subject: "I",
    object: "JavaScript",
    verb: "love",
};
//note that I've changed the order, but the order will print in the order
//defined in the arguments as when the function was first declared
// object o 
console.log(getSentence(o));

//destructuring arrays
function getOtherSentence([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`;
}

const arr = [ "Love", "I", "JavaScript" ];
console.log(getOtherSentence(arr));
//note that unless you tell it somehow, the computer doesn't know grammar!
//Unlike with the object, it just does it in order.

//using the "spread" operator (...)

function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex", "vince", "cede"));

//so here, the function addPrefix uses as it's argument the value of prefix
//and combines it (using the spread op) with the value of whatever other words are 
//entered into the argument when the function is called

//it does this by making an empty array called prefixedWords
//it then uses a for loop to fill this array as many times as there are indexes
//with the value of "prefix" combined with the value of every other index
//then it returns the array
//just WOW!
