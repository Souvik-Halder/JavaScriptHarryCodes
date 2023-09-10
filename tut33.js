console.log('Fetch API:');

// Button with id myBtn
let myBtn = document.getElementById('myBtn');
// div with id content
let content = document.getElementById('content');

// function getData() {
//     console.log("Started getData");
//     url = "anik.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then ");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then ");
//         console.log(data);
//     })
// }


function getData() {
    console.log("Started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then ");
        return response.json();
    }).then((data)=>{
        console.log("Inside second then ");
        console.log(data);
    })
}

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data ='	{"name":"Anik","salary":"35000","age":"21"}'
    params = {
        method:'post',
        headers: {
           'content-type': 'application/json' 
        },
        body: data 
    }
    fetch(url, params).then(response=>response.json())
    .then(data=>console.log(data))
}

postData();

