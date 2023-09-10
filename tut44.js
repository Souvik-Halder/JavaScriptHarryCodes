console.log('JavaScript Maps:');

//Maps in JavaScript: wecan use any type ofkey or value. 
const myMap = new Map();

const key1 = 'myStr',
      key2 = {},
      key3 = function(){
    };


// setting map values:
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blankobj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

// getting  the values from a map
let value1 = myMap.get(key1);
console.log(value1);
let value2 = myMap.get(key2);
console.log(value2);
let value3 = myMap.get(key3);
console.log(value3);

// Getting the size of the map
console.log('Size of myMap', myMap.size);

// You can loop using for-of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
    // console.log('Key is',key);             //Get only keys
    // console.log('value is', value);        //Get only values
}


// Getting keys only
for (let key of myMap.keys()) {
    console.log('Key is',key);
}


// Getting values only
for (let value of myMap.values()) {
    console.log('value is',value);
}


// You can loop through a map using for each loop
myMap.forEach((value, key)=>{
    console.log('Key is', key);
    console.log('value is', value);
});


// You can convert a Map into an array
let myArray = Array.from(myMap);
console.log('Map to an Array is', myArray);


// You can convert a Map keys into an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map keys to an Array is', myKeysArray);


// You can convert a Map values into an array
let myValuesArray = Array.from(myMap.values());
console.log('Map values to an Array is', myValuesArray);
