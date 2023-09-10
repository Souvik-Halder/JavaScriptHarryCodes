console.log('Generators in JavaScript:');

function* numbersGen() {
    let i = 0;

    // yield 'Apples';
    // yield 'Grapes';
    // yield 'Oranges';
    // yield 'Bhindi';
    while(true) {
        yield i++;
        // yield (i++).toString();
    }

}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next().value);
