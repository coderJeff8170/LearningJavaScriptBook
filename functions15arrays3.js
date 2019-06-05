

const pipeline = [
    
    function calcTax(o) {
        o.tax = o.price * 0.1;
    },
    
    function addTax(o) {
        o.total = o.price + o.tax;
    },
    
    function doubleValue(o) {
        o.double = o.total * 2;
    }

];

let testArray = [
    {price: 20, tax: 0, total: 0}, 
    {price: 40, tax: 0, total: 0},
    {price: 60, tax: 0, total: 0},
    {price: 80, tax: 0, total: 0}
    ]; 

let myArray = testArray.slice();
//what if it were an array of objects? hmm....

function runPipeline(y) {

    for(let i=0; i<pipeline.length; i++) {
        pipeline[i](y);//must call each function in the pipeline!!
        //return w;
    }

}

function pipeArray(array){

    for(let i=0; i<array.length; i++) {
        runPipeline(array[i]);
    }
    console.log(array);
}

pipeArray(myArray);
console.log(testArray);




//great! with a few modifications, the original array of objects is now altered.
//but this leads to a new question, how to leave the old array unaltered, and make a new one
//with the updated values...
//bearing in mind, of course, there are better ways to do this...

//thus far, what I've done is alter both, bcause newArray just points to testArray... hmm
//they are different arrays though....


