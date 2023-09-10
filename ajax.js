console.log("AJAX tutorial");

// https://dummy.restapiexample.com/api/v1/employees
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object

    //Use this for GET request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //Use this for POST request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');


    // what todo on progress (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // xhr.onreadystatechange = function() {
    //     console.log("ready state is ", xhr.readyState);
    // }

    //what to do when respond is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("some error occured");
        }

    }

    //send the request
    ps = `{"name":"testavbaakih","salary":"123","age":"23"}`;
    xhr.send(ps);

    console.log("we are done!");
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    
    console.log('You have clicked the pop handler');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    //what to do when respond is ready
    xhr.onload = function () {
        if (this.status === 200) {

            let obj = JSON.parse(this.responseText);
            console.log(obj)
            let list = document.getElementById('list');

            str = "";
            for (key in obj) {
                str == `<li>${obj[key].employee_name} </li>`;
            } 
            list.innerHTML = str;
        }
        else {
            console.log("some error occured");
        }

    }

    //send the request
    xhr.send();

    console.log("we are done with fetching Employee!!");
}