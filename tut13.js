console.log('javaScript tut13');

/*
types of element selector
1. single element selector
2. multiple element selector  
*/

//single element selector
let el = document.getElementById('firstchild');
// el = el.className
// el = el.childNodes
// el = el.parentNode
// console.log(el);

//changing css through js 
el.style.color = "red";
el.style.background = "yellow";
el.innerText = "Here you gonna know about javaScript"
el.innerHTML = "<b>Here you gonna know about javaScript</b>"
// el.innerHTML = "<i>Here you gonna know about javaScript</i>"
// el.innerHTML = "<u>Here you gonna know about javaScript</u>"


// let el = document.getElementsByClassName('child red');
// console.log(el.innerHTML);
// console.log(el.innerText);

let sel = document.querySelector('#firstchild');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel = document.querySelector('b');
// sel.style.color = 'green';
// console.log(sel);


//Multipe element selector
let elmnt = document.getElementsByClassName('child');
elmnt = document.getElementsByClassName('container');
elmnt = document.getElementsByTagName('div');
// console.log(elmnt[0].getElementsByClassName('child'));
console.log(elmnt);

// for (let index = 0; index < elmnt.length; index++) {
//     const element = elmnt[index];
//     console.log(element);
    
//     element.style.color = 'blue';
// }

// Array.from(elmnt).forEach(function(element) {
//     console.log(element);
//     element.style.color = 'blue';
// });

