/* const colors = ['red', 'orange', 'yellow', 'green',
'blue', 'indigo', 'violet'];
let colorIndex = -1;
function getNextRainbowColor() {
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
} */


//remember this one?^^ again, it's not a pure function because color index
//gets altered (side effect) each time, and it has a different return value
//with the same input (it's arguments are nothing, so input is 'nothing')

//in order to make this a pure function, we can first eliminate the side effect
//by putting the external variables inside a closure:

const getNextRainbowColor = (function() {
    const colors = ['red', 'orange', 'yellow', 'green',
        'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    function getNextRainbowColor() {
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();//an IIFE!

//side effect eliminated, but same output for given input?
//to do this we have to look at how the function is going to be used
//perhaps it's going to change colors of an element in the browser at 
//certain intervals:

setInterval(function() {
    document.querySelector('.rainbow')
        .style['background-color'] = getNextRainbowColor();
}, 500);

//seems like it would work, but if something else called getNextRainbowColor(),
//it might interfere with this code. At this point, we might question whether
//a function with side effects is a good idea (wait, I thought we eliminated the 
//damned side effects!) Author says an iterator would be a better choice:

function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green',
        'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next() {
            if(++colorIndex >= colors.length) colorIndex = 0;
            return { value: colors[colorIndex], done: false };
        } 
    };
}
//our function getRainbowIterator is now pure. It returns an iterator every time
//and it has no side effects. We have to use it differently, but it's much safer:

const rainbowIterator = getRainbowIterator();
setInterval(function(){
    document.querySelector('.rainbow')
        .style['background-color'] = rainbowIterator.next().value;
}, 500);



