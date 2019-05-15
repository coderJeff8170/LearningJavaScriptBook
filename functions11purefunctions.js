//pure functions 
//A: return the same output for the same set of inputs
//B: don't have side effects

const colors = ['red', 'orange', 'yellow', 'green',
'blue', 'indigo', 'violet'];
let colorIndex = -1;
function getNextRainbowColor() {
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());//oooooh

//so, the above is not a pure function because every time you call it,
//it produces a different output for the same input.
//and since the function 'getNextRainbowColor()' modifies color index each iteration,
//that qualifies as a 'side effect' So, gNRC violates both pure function rules!
