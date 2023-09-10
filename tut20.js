console.log('javaSCript tut20 : Exercise 2');

/*
you have create a div and inject it into the page which contains a heading

whenever someone clicks on the div, it should be converted into an editable item, whenever user clicks away (blur).save the note into local storge
*/

// creating a 'div' element:
let divElmnt  = document.createElement('div');

// adding text and attributes to that created 'div' element:
let val = localStorage.getItem('text');
let text;
if (val == null){
    text = document.createTextNode('This is my Element, click to edit it')
}
else{
    text = document.createTextNode(val);
}

divElmnt.setAttribute('id', 'elmnt');
divElmnt.setAttribute('class', 'elmnt');
divElmnt.setAttribute('style', 'border: 2px solid black; width: 154px; margin: 54px 36px; padding:33px');

divElmnt.appendChild(text);

// grabbing the main container:
let container = document.querySelector('.container');
let first = document.getElementById('firstchild');

// inserting the element into the page before the element with id first :
container.insertBefore(divElmnt, first);

console.log(divElmnt, first, container);

// adding eventlistener to the divelmnt:
divElmnt.addEventListener('click',function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
    let html = elmnt.innerHTML
    divElmnt.innerHTML =  `<textarea class="textarea form-control" id="textarea" rows="3"> $[html] </textarea>` ;
    }

    // listen for the blur event on the textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elmnt.innerHTML = textarea.Value;
        localStorage.setItem('text', textarea.value);
    })
});



