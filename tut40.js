console.log('Iterators in JS');

function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                //we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                //we will return below object with only
                return {
                    done: true
                }
            }
        }
    }
} 



const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log(myArray);

//Using the Iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);