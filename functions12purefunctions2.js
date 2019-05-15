//remember this one?

/* function isCurrentLeapYear() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
} */

//different input depending on when you call it - violates rule 1!
//we could rewrite tho:

function isLeapYear(year) {
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

//now it's a pure function!
//getNextRainbowColor is a bit trickier...