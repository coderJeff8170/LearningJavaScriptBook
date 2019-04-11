//crown & anchor!


//functions 

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}//returns a random integer in the range [m, n] (inclusive); reuseable!

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];//calls rand(function above) using 0 and 5 as parameters
}//randomly returns a string representing one of the six crown & anchor faces:

let funds = 50;  //starting conditions
let round = 0;

while (funds > 1 && funds < 100) {//while funds are in range the game will run
    round++;//increments the round
    console.log(`round ${round}:`);//logs the round
    console.log(`\tstarting funds: ${funds}p`);//logs funds at start of round
    //place bets
    const bets = { crown: 0, anchor: 0, heart: 0,
        spade: 0, club: 0, diamond: 0, };//sets each face at zero
    let totalBet = rand(1, funds);//sets total bet at a random number between 1 and funds left(pulls coins out of pocket)
    if (totalBet === 7) {//superstition! if the above number is 7 dude is gonna bet it all
        totalBet = funds;//sets totalBet to funds left
        bets.heart = totalBet;//sets key 'heart' in obj 'bets' to funds via totalBet.
    } else {
        //distribute total bet
        let remaining = totalBet;//assigns random coins pulled from pocket to variable 'remaining'
        do {//vv do all this while still remaining coins left in hand
            let bet = rand(1, remaining);//random number of coins
            let face = randFace();//assigns a random face to variable 'face'
            bets[face] = bets[face] + bet;//assigns value of 'bet' to random key 'face' in object 'bets' plus value already there!
            remaining = remaining - bet;//subtracts bet from remaining coins in hand
        } while (remaining > 0);//once there are no more coins in hand, exits loop
    }
    funds = funds - totalBet;//funds still in pocket
    console.log(`\tbets: ` +
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
        ` (total: ${totalBet} pence)`);


    // roll dice
    const hand = [];//empty hand
    for (let roll = 0; roll < 3; roll++) {//runs loop three times (roll is usually i for index)
        hand.push(randFace());//adds random face each iteration until there are three
    }

    //collect winnings at the end of each round

    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    //add winnings from round to funds
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
    //return to start of while loop
}
console.log(`\tending funds: ${funds}`);