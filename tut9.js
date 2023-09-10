console.log('javaScript tut9');

// for loop
// for(let i = 0; i<=100; i++){
//     console.log(i);
// }

//while loop
// let j = 0;
// while(j<=10){
//     console.log(j);
//     j++
// }

//Do-while loop
// print the value at least one time
// let k = 0;
// do{
//     console.log(k+2);
//     k++;
// }
// while(k<=10);


// break statement
// let k = 0;
// do{
//     console.log(k+2);
//     if (k===5) {
//         break;
//     }
//     k++;  
// }
// while(k<=10);
// console.log('done');

// continue statement
// let k = 0;
// do{
//     if (k===5) {
//         // k++;
//         continue;
//     }
//     console.log(k+2)
//     k++;  
// }
// while(k<10);
// console.log('done');


// for printing the elements of array
let arr = [2,4,6,8,1,5];
arr.forEach(function(element, index, array){
    console.log(element,index,array);
});
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }
// console.log('done');

// let obj = {
//     name: "Anik Raj",
//     age: 19,
//     type: "Developer",
//     os: "Windows"
// }
// for(let key in obj){
//     console.log(`The ${key} of obj is ${obj[key]}` );
// }
console.log('done');