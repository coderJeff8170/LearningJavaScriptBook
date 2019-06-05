//functions can be used in an array to carry out a sequence of tasks that we
//might want to do frequently - a 'pipeline'
//it might just be that a pipline of functions only operate on the parameter 
//supplied to the pipeline - I can't see how to return something that will be used 
//by the next function and so on - there are other ways to do this though...

const pipeline = [
    
    function calcTip10(x) {
        let tip = x * 0.1;
        return tip;
    },
    
    function calcTip15(x) {
        let tip = x * 0.15;
        return tip;
    },

    function calcTip20(x) {
        let tip = x * 0.2;
        return tip;
    },

];

let z = 20;

let testArray = [20, 40, 60, 80]; //breaks with an array


function runPipeline(y) {
    for(let i=0; i<pipeline.length; i++) {
        let w = pipeline[i](y);//must call each function in the pipeline!!
        //return w;
    }

}

function pipeArray(array){
    let newArray = [];
    for(let i=0; i<array.length; i++) {
        newArray.push(runPipeline(array[i]));
    }
    console.log(array);
    console.log(newArray);
}

//runPipeline(z);
pipeArray(testArray);

