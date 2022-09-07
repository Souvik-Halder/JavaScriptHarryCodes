console.log('javaScript tut7 and let us discuss about arrays')

 let marks = [34,67,23,14,18,19];
//  const marks = [34,67,23,14,18,19];
 const fruit = ['Orange','Grapes','Apple','banana'];
 const mix = [[12,45],78,'Orange','Apple'];

const arr = new Array(23,32,51,'Orange');

console.log(marks);

// console.log(fruit);
// console.log(fruit[2]);

// console.log(mix);

// console.log(fruit);

// console.log(arr);
// console.log(arr.length);
// console.log(Array.isArray(arr));
// console.log(Array.isArray('abcd'));
arr[1] = 'Anik';
let arrelement = arr[1];
// console.log('element :',arrelement);
// console.log(arr);

let value = marks.indexOf(23);
// let value = marks.indexOf(24);
// console.log(value)

// mutating and modifying arrays
// marks.push(351);
// marks.unshift(1089);
// marks.pop()
// marks.shift();
// marks.splice(1,3);
// marks.reverse();
let marks2 = [1,2,4,8];
marks = marks.concat(marks2);
// console.log(marks);

let myObj = {
    // Name: 'Anik',
    'first name': 'Anik',
    channel: 'nicklodean',
    isActive: true,
    marks: [2,5,8,9]
}
console.log(myObj)
console.log(myObj.marks)
console.log(myObj.isActive)
// console.log(myObj.Name)
console.log(myObj.channel)
console.log(myObj['first name'])



