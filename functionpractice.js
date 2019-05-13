//jeffs function practice

function isLeapYear(year) {
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}
let myYear = 1984;

if(isLeapYear(myYear)) console.log('It IS a leap year.')
    else(console.log('It is NOT a leap year.'));

//work this example; make it so that it'll tell us past or present tense...
//"that WAS a leap year" or "that will be a leap year"