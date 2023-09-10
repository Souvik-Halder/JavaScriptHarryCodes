console.log('Destructing in JavaScript:');

let a, b;
[a, b] = [34, 43];
console.log(a, b);

[a, b, c, d, ...e] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Array Destructing
({a, b, c, ...d} = {a:34, b: 43, c: 78, d: 23, e: 91})
// console.log(a, b, c, d);

const fruits = ['Apples', 'Banana', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);


// Object Destructing
const laptop = {
    Model: "HP Pavilion",
    Age: "1 Year",
    modelNo: "IB002417",
    Price: 65000,
    start:  function(){console.log('Started')}
}

const {Model, Age, modelNo,  Price, start} = laptop
console.log(Model, Age, modelNo, Price, start);