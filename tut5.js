console.log('javaScript tut5');

//Type Conversion
let myVar;
myVar = 54;
console.log(myVar,(typeof myVar));

let myVrr;
myVr = String(54);
console.log(myVar,(typeof myVr));

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
// console.log(date,(typeof date));

let arr = String([1,2,3,4,5]);
// console.log(arr,arr.length,(typeof arr));
// let myArr = [1,2,3,4,5];
// console.log(myArr,myArr.length,(typeof myArr));

let i = 81;
// console.log(i.toString());

let stri = Number("3456"); 
// stri = Number(true);
stri = Number("345nik6");
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri,(typeof stri));

//
let number = parseInt(54.0987);
let float = parseFloat(54.0987);
// console.log(number,(typeof number));
// console.log(float,(typeof float));
console.log(float.toFixed(10),(typeof float));

//Type Coerion
// let myStr = "567";
let myStr = Number("567");
let myNum = 34;
console.log(myStr + myNum);






  
