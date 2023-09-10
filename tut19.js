console.log('javaScript tut19 : ')

let impArray = ['aaloo','pyaz','tamatar'];

// ading a key value inside local storage
localStorage.setItem('Name1','Anik');
localStorage.setItem('Name2','Ankit');
localStorage.setItem('Name3','Vicky');
localStorage.setItem('veg',JSON.stringify (impArray));


// clear the entire local local storage
// localStorage.clear();

//clear a particular key value
// localStorage.removeItem('Name2')

// retrive an item from the  local storage
let Name = localStorage.getItem('Name1');
console.log(Name);
Name = JSON.parse(localStorage.getItem('veg'));
console.log(Name);

sessionStorage.setItem('sessionName','sAnik');
sessionStorage.setItem('sessionName2','sAnkit');
sessionStorage.setItem('sessionName3','sVicky');
sessionStorage.setItem('sessionveg',JSON.stringify (impArray));