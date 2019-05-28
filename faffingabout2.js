// so let's say i had an array:

let hand = [1, 1, 1, 1, 1, 1];
/* let allEqual = function identical(array) {
    for(i=0; i<array.length-1; i++) {
        if (array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
} */
//allEqual(hand);

let ones = hand.filter(x => x === 1);
        if (ones.length === 6){
        'you have 1000 points!';
        } else if(ones.length === 3) {
        'you have 500 points!';
        } else if (ones.length === 1) {
        'you have 50 points!'
        } else {
        'keep trying for more ones';
        }


//console.log(ones);

//scope!! ack!!