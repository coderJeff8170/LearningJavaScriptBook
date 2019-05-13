//functions are subroutines, code that can be called and reused time and again:
//(perhaps this first part is just a refresher - functions part 2!)

/* function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year.`)
    else if(year % 100 != 0) console.log(`${year} IS a leap year.`)
    else if(year % 400 != 0) console.log(`${year} is NOT a leap year.`)
    else(console.log(`${year} IS a leap year.`));
} */

//as we build a program, we quickly grow out of logging to console. functions
//are desined to return values, and we can rewrite (and rename) the above to:

function isCurrentLeapYear() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

//how might we use the above?
//(it is common practice to name functions that return a boolean with an initial 'is').

const daysInMonth =
[31, isCurrentLeapYear() ? 29 : 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31];
if(isCurrentLeapYear()) console.log('It IS a leap year.')
    else(console.log('It is NOT a leap year.'));

console.log(daysInMonth);

//very cool! care to iterate?

