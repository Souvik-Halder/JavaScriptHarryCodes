console.log('For-of Loop vs For-in Loop');

let people = ["Anik", "Abhinav", "Vicky", "Ashutosh", "Gaurav"];


// traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element)
// }

// 1. ITERATING AN OBJECT:

let obj = {
    name: "Anik",
    language: "JavaScript",
    hobbies: "Web Development"
}
console.log(obj);

// 1.1----Iterating an object using traditional for loop:----
for (let index = 0; index < Object.keys(obj).length; index++) {
        const element = obj[Object.keys(obj)[index]];
        console.log(element)
    }


// 1.2----Iterating an object using for-in loop:----
for (let key in obj) {
    console.log(obj[key]);
}

 
// 2.ITERATING A STRING:
let myString = "Hello Everone! Anik Raj here.";
console.log(myString);

// 2.1----Iterating character of a String using traditional for-in loop:----




// 2.2----Iterating character of a string using for-in loop:----
for (const index in myString) {
        console.log(myString[index]);
        
    }

    
    //**************For of Loop***************
    console.log("**************For-of Loop starts here***************");
    people = ["Anik", "Abhinav", "Vicky", "Ashutosh", "Gaurav"];
    
    for (const name of people) {
        console.log(name);
    }
    
    // ----Iterating character of a string using for-of loop:----
    for (const name of myString) {
        console.log(name);
    }