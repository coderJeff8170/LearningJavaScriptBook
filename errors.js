//JS has a built in Error object that is useful in catching and handling errors.
//imagine an email validator:

function validateEmail(email) {
    return email.match(/@/) ?
    email :
    new Error(`invalid email ${email}`);
}

//to use the function validateEmail, we can use the typeof operator to determine
//if an instance of Error has been returned:

const email = 'jeffsuperbjeff.com';

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
}else{
    console.log(`Valid email: ${validatedEmail}`);
}
//either prints Error: invalid email (whateverthevalueofemailis)
//or
//Valid email: (whateverthevalueofemailis)
//this is all very well - but if email is anything but a string, it will cause the 
//containing program to crash. The solution to this is try...catch


