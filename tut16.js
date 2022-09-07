console.log('javaScript tut16 : Event and event object in java');

// document.getElementById('heading').addEventListener('click',function(e){
// console.log('You have clicked the heading');
// console.log(e)
// location.href = '//google.com'

// document.getElementById('heading').addEventListener('click', function (e) {
    document.getElementById('heading').addEventListener('mouseover', function (e) {
    let variable;
    console.log('You have clicked the heading');
    variable = e.target;
    // variable = e.target.className;
    // variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.classList);
    // variable = e.offsetX;
    // variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});