console.log('javaScript tut15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

// console.log(cont);

//childNodes includes all child including 'text(enter)' and 'comment'
// console.log(cont.childNodes);

//children includes all child excluding 'text(enter)' and 'comment'  (commonly uded)
// console.log(cont.children);

// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

//noder Types
// 1. element
// 2. Attribute
// 3. Text nodeName
// 8. comment
// 9. document
// 10. docType

//traversing
let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

// console.log(container.children);
// console.log(container.firstChild);
console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);

//count of child elements
console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);

//nextsibling : we can get either text or comment or element
console.log(container.firstElementChild.nextSibling);

//nexrElementSibling:we can get only next element
console.log(container.firstElementChild.nextElementSibling);
//chaining
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);



