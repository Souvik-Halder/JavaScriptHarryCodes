console.log('javaScript tut17 : More on javaScript Events');

// let btn = document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);

// function func1(e) {
//     console.log('thanks', e);
//     e.preventDefault();
// }

// // e.preventDefault(); -> used to prevent from the default behaviour of submitting the form by clicking any button.

// function func2(e) {
//     console.log('thanks its a double click', e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down", e);
//     e.preventDefault();
// }



// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('You entered no')
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('You exited no')
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},15)`;
    console.log('You triggered mouse move event');
})
