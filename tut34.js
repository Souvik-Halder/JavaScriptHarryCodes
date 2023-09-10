console.log('Async/Await in javaScript:');


async function anik() {
    console.log("Inside anik function");
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('Users resolved');
    return users;

    // return "Anik";
}

console.log("Before calling anik");
let a = anik();
console.log("After calling anik");
console.log(a);
a.then(data => console.log(data));
console.log("Last line of this js file");