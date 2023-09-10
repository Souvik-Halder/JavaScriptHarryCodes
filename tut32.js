console.log('Arrow function in JavaScript:');

// Creating a regular function:
// const anik = function() {
//     console.log('Anik you are best.');
// }

// Converting it in to an arrow function:
// const anik = ()=> {
//     console.log('Anik you are best.');
// }

// anik();

 
// function returning something:
// const greet = function() {
//     return "Good Morning"
// }

// const greet = ()=> {
//     return "Good Morning"
// }

        // 'OR'
// One liners do not required any braces/return:
// const greet = () => "Good Morning";

// creating object using arror function in one line:
// const greet = () => ({name: "Anik"});

// const greet = (name) => "Good Morning " + name ;
// Parenthesis is not required when there is only one argument:
// const greet = name => "Good Morning " + name ;
// console.log(greet('Anik',));

// Parenthesis is required when there is more then one arguments:
const greet = (name, ending) => "Good Morning " + name +", " + ending ;
console.log(greet('Anik','Bye'));
