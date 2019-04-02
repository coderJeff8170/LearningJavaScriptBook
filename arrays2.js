//reverse is exactly what you expect!
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); //arr is now [5, 4, 3, 2, 1]

//sort well, sorts! (default is numerically)
console.log(arr.sort()); //arr is now [1, 2, 3, 4, 5]

//sort allows you to specify a sort function!!!
const arr2 = [{ name: "Sophia" }, { name: "Jeff" }, 
    { name: "Jen" }, { name: "Marley" }];
console.log(arr2.sort());//arr2 same
console.log(arr2.sort((a, b) => a.name > b.name));//arr2 sorted alphabetically by name property
console.log(arr2.sort((a, b) => a.name[1] < b.name[1]));//arr 2 sorted reverse alphabetically
//by second letter in name property! Wow!

