//functions can be used in an array to carry out a sequence of tasks that we
//might want to do frequently - a 'pipeline'


const pipeline = [
    
    function calcTax1(x) {
        let tax = x * 0.1;
        return tax;
    },
    
    function calcTax2(x) {
        let tax = x * 0.2;
        return tax;
    },

    function calcTax3(x) {
        let tax = x * 0.3;
        return tax;
    }

];

let pArray = [10, 20, 40, 80];
//let nArray = [];

let z = 20;


function runPipeline(x) {
    for(let i=0; i<pipeline.length; i++) {
        x = pipeline[i](x);//must call each function in the pipeline!!
        return x;
    }

}

//console.log(runPipeline(z));

//alright, now run the pipeline on an array....

//console.log(runPipeline(pArray)); returns NaN
//lets try it with a for loop:
function pipeArray(array){
    let newArray = [];
    for(let i=0; i<array.length; i++) {
        newArray.push(runPipeline(array[i]));
    }
    console.log(array);
    console.log(newArray);
}

//fuck yes!! , well, wait a sec, it's not running second func in pipeline adding the tax..

pipeArray(pArray);




