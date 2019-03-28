//BLOCK

//let and const declare identifiers in block scope
//a block is a list of statements within curly braces
//so block scope is limited to within those braces

// console.log('before block');
// {
//     console.log('inside block');
//     const x = 3;
//     console.log(x);
// }
// console.log(`outside block: x = ${x}`); Will throw error because x is in block scope
//vvjust a test
// y = "Jeff";
// console.log(`outside block: y = ${y}`);
//^^there's little practical use for standalone blocks other than to test things

//VARIABLE MASKING - two variable with same name can be in scope at same time, but
//while inner one is being used, the outer is 'masked' and cannot be accessed 
//until that inner scope is exited:
{
    //outer block
    let x = { color: "blue" };
    let y = x; //y and x now refer to same object
    let z = 3;
    {
        //inner block
        let x = 5; //outer x is now masked
        console.log(x); //logs 5
        console.log(y.color); //logs "blue"; object pointed to by y(and x in outer scope)
                            //is still in scope
        y.color = "red";//modifies original object pointed to by y!
        console.log(y.color);
        console.log(z); //logs 3; z was never masked
    }
    console.log(x.color); //logs "red"; object modified in inner scope by y!
    console.log(y.color); //logs "red"; x and y point to same object in outer scope
    console.log(x);
    console.log(y);
    console.log(z);

}


