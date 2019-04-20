const waylan = {
    name: 'Waylan',
    age: 14,
    classification: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        genus: 'Felis',
        species: 'Catus'
    }
};

console.log(waylan);
// property values can be objects themselves
// consider the different ways we can access waylan the cat's family:
// member access operator!

console.log(waylan.classification.family); //Felidae
console.log(waylan["classification"].family); //Felidae
console.log(waylan.classification["family"]); //Felidae
console.log(waylan["classification"]["family"]); //Felidae

//objects can also contain functions
//let's add a function to waylan so that he can talk

waylan.speak = function() { return "Qua-Qwow!"; };

console.log(waylan.speak()); //Qua-Qwow!

console.log(waylan);

//we can delete properties from objects with the delete operator:

delete waylan.classification;

delete waylan.speak;

console.log(waylan);

//what makes objects special is that you can access properties by their key.

//objects have no given order of enumeration for properties, unlike arrays.

//for this reason, if you want to list out the contents of a container, it's best to use an array.



