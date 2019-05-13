try {
    console.log('this line is executed...');
    //throw new Error('whoops');
    console.log('this line is not...');
} catch(err) {//aha, this won't run if there's no error.
    console.log('there was an error...');
    console.log(err.stack);
} finally {
    console.log('...always executed');
    console.log('perform cleanup here');
    
}

//I'm not sure I really understand this - ok, so catch(err) only runs if there was
//an error?