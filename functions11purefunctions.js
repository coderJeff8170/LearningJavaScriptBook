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