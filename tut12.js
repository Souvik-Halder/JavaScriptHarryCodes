console.log('javaScript tut12')

// let a = document;

// a = document.all;
// a = document.body;
// a = document.head;
// a = document.forms[0];

//array.form make an array from html collection
// Array.from(a).forEach(function(element){
//     console.log(element)
// })

// a = document.links[3];
// a = document.links[0].href ;

//use document.images and document.scripts and print the list of images ans scripts on an html page
// b = document.images;
// a = document.scripts;
// Array.from(a).forEach(function (element){
//  console.log(element)
// }
// )
// Array.from(b).forEach(function (element){
//     console.log(element)
//    }
//    )


// question

let a = document.links;
Array.from(a).forEach(function (element) {
    if (element.innerText.includes('anik'))
    console.log(element);
});

// console.log(b);
console.log(a);


