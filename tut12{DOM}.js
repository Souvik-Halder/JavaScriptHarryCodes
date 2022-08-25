console.log("This is tut 12");
let a=document;
// let a=document.body;
// console.log(document.forms[0])
Array.from(a).forEach((element)=>{
    console.log(element);
})
//use documents.images and documents.script in console
let b=document.images;
console.log(b[0].src);
Array.from(b).forEach((element)=>{
    console.log(element.src);
})
console.log(a);