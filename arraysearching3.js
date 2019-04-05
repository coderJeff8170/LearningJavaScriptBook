//filter continued

//create a deck of cards
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) //Hearts, Clubs, Diamonds and Spades
    for(let value=1; value<=13; value++)
        cards.push({ suit, value });

//get all cards with value 2:
console.log(cards.filter(c => c.value === 2));
/* returns  [ { suit: 'H', value: 2 },
            { suit: 'C', value: 2 },
            { suit: 'D', value: 2 },
            { suit: 'S', value: 2 } ]
 */
//get all diamonds
console.log(cards.filter(c => c.suit === 'D'));
//get all face cards
console.log(cards.filter(c => c.value > 10));
//get all face cards that are hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));

//and if we want to create a short string rep of the deck:

function cardToString(c) {
    
}
