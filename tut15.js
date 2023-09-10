console.log('javaScript tut15 - creating, removing and replacing elements:')


//CREATING-
let elmnt1 =  document.createElement('li');

//adding a class name to the li element
elmnt1.className = ('childul');

//adding a id name to the li element
elmnt1.id = ('uniqueid');

//adding a attribute to the li element
elmnt1.setAttribute('title', 'mytitle');

//adding a text to the li element
elmnt1.innerText = 'Hello this is a newly created text';
//to do the text bold
elmnt1.innerHTML = '<b>Hello this is a newly created text</b>';

                          //'OR'

// let txt = document.createTextNode('Hello this a newly created text for elmnt1');
// elmnt1.appendChild(txt)

//selecting ul of 'this' class 
let ul = document.querySelector('ul.this');

//adding all the element in the ul
ul.appendChild(elmnt1);
// console.log(ul);
// console.log(elmnt1)

//REPLACING-
let elmnt2 = document.createElement('h3');
elmnt2.id = 'elmnt2';
elmnt2.className = 'elmnt2';
let text = document.createTextNode('This is a newly created text node for elmnt2 which is replaced with elmnt1')
elmnt2.appendChild(text);

elmnt1.replaceWith(elmnt2);
// console.log(ul);
// console.log(elmnt2);

//relacing a child using element id
let myul = document.getElementById('myul');
myul.replaceChild(elmnt1,document.getElementById('fli'));


//REMOVING-
// myul.removeChild(document.getElementById('lli'));
// console.log(elmnt2);
// let pr = elmnt2.getAttribute('class'); 
let pr = elmnt2.hasAttribute('class');
elmnt2.removeAttribute('id');
elmnt2.setAttribute('title','myelmnt2title');
console.log(elmnt2, pr);


//question
//create a heading element with text as 'Go to codewithAnik' and create an a tag outside it with href = "https://www.codewithHarry.com"