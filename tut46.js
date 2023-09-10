console.log('JavaScript Symbols:');

// Symbols
const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');
// console.log('Symbol is', sym1);
// console.log('Type of symbol is',typeof sym);
console.log(sym1 === sym2);

const a = "hello Everyone";
const b = "hello Everyone";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const key1 = Symbol('identifier for key1');
const key2 = Symbol('identifier for key1');

myObj = {};
myObj[key1] = "Anik";
myObj[key2] = "Vicky";
myObj["name"] = "Abhinav";
myObj[5] = "you are here";

console.log(myObj);
console.log(myObj[key1]);
console.log(myObj[key2]);
// console.log(myObj.key2);      //ALERT: can't do this to get desired output because it is same as muObj["key2"]


//Symbols are ignored in for-in loop
for(let key in myObj) {
    console.log(key, myObj[[key]])
}

console.log(JSON.stringify(myObj));