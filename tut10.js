console.log('javaScript tut10');

//Functions in javaScript:

// taking a function in a variable 
// const myWish = function(name1, thank='Thankyou'){
//     let msg = `Happy Birthday, ${name1} This birthday I wish you and your family abundance, happiness, and health. May lady luck come especially for you.${thank}`;
//     return msg;
// }

// declaration of function
// function wish(name1, thank = 'Thanku'){
//     console.log(`Happy Birthday, ${name1} This birthday I wish you and your family abundance, happiness, and health. May lady luck come especially for you.${thank}`); 


//     let msg = `Happy Birthday, ${name1} This birthday I wish you and your family abundance, happiness, and health. May lady luck come especially for you.${thank}`;
//     return msg;
// }

// let name1 = 'Anik';
// let thank = 'Thanku';
// let name1;
// let thank;

// wish(name1,thank);
// wish('Anik','thanku');
// wish(name1)

// let val= wish(name1,'Thanks a lot');
// console.log(val);

// let val = myWish(name1,'Thanks a lot');
// console.log(val);

// // --------------------------------------------------------

// // make a function inside an object
// const obj = {
//     name: "Anik",
//     game: function(){
//         return "GTA vice city";
//     }
// }
// console.log(obj.game(),"\n",obj.name);


// let arr = ['fruit','vegetable','furniture','stationary'];

// arr.forEach(function(element, index, array){
//     console.log(element,index,array)
// });

// var i = 123;
// let i = 123;
if (1){
    var i = 123;
    console.log(i);
}

console.log(i);
function webSite(name){
    
    // i = 456;
    // var i = 456;
    let i = 456;

    console.log(i);
    return`this is ${name}'s Website `;
}
console.log(webSite('Anik'),i);

