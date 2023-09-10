console.log('JS Regular Expression and related functions:');

// This is a regular expression literal in JS
let reg = /Anik/;
// reg = /Anik/g;   //---> g means global
// reg = /Anik/i;   //---> i means case insensitive


console.log(reg);
console.log(reg.source);

let a = "anik is a great human being because Anik is great by his nature";

// Functions to match expressions

// 1. exec() - This function will return an array for match or null for no match 
let result = reg.exec(a);
// result = reg.exec(a);
// console.log(result);
// result = reg.exec(a);
// console.log(result);   --->  we can use multiple exec with global flag

if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}


// 2. test() - Returns true or false
let result2 = reg.test(a);
console.log(result2);   // ---> this will only print true if the "reg" is there in the string "a"


//3. match() - it will return an array of result or null
// let result3 =  reg.match(a);   ---> this is wrong
let result3 = a.match(reg);      //--->this is right
console.log(result3);


//4. search() - Returns index of first match else -1
// let result3 =  reg.search(a);   ---> this is wrong
let result4 = a.search(reg);     //---> this is right
console.log(result4);


//5. replace() - Returns new replaced string with all the replacements(if now global flag is given, first match will be replaced)
let result5 = a.replace(reg, 'He');
console.log(result5);


