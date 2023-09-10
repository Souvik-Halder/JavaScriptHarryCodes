console.log('JavaScript Sets');

// Set stores unique values.

//Initialize an empty set
const mySet = new Set();
console.log('The Set looks like this :', mySet);

//Adding vlues to this Set:
mySet.add('My');
mySet.add('name');
mySet.add('is');
mySet.add('Anik');
mySet.add('Raj');
mySet.add(50);
mySet.add(true);
console.log('Now the Set looks like this after adding values to it:', mySet);

let mySet2 =  new Set([1, 6, 'anik', true, {a:5, b:10}, function(){}]);
console.log('New Set is :', mySet2);

// Get the size of the Set
console.log(mySet2.size);

// check whether the Set has 'anik' or not
console.log(mySet2.has('anik'));

// Deleting a element from the Set
console.log('Before removal', mySet2);
mySet2.delete('anik');
console.log('After removal', mySet2);

// Iterating a Set
for(let item of mySet2) {
    console.log('Item is: ', item);
}

mySet2.forEach((item)=>{
    console.log('Item is: ', item);
})


//Quiz: can we use Array.from(mySet2) to convert set into an Array
const a = new Set([1, 'you', 45, 'this']);
let myArray = Array.from(a);
console.log('Set to an Array is', a);