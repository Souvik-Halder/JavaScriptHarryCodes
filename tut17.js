console.log('javaScript tut17 : More on javaScript Events')

let btn = document.getElementById('btn');
btn.addEventListener('click',func1);

function func1(e) {
    console.log('thanks', e);
    e.preventDefault();
    
}
