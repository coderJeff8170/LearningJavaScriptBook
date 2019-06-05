const pipeline = [
    
    function calcTax(x) {
        let tax = x * 0.08;
        return tax;
    },
    
    function addTax(x) {
        x = x + tax;
        return x;
    }

];



let z = 20;


function runPipeline(x) {
    for(let i=0; i<pipeline.length; i++) {
        x = pipeline[i](x);//must call each function in the pipeline!!
        return x;
    }

}

console.log(runPipeline(z));