console.log('Regular Expression: Shorthand character classes');


// Character classes
regEx = /\wnik/;           // \w means word character -> _ or alphabet or numbers
regEx = /\w+i1k/;          // \w+ means one or more word characters
regEx = /\Wbhai/;          // \W means non word character
regEx = /\W+bhai/;         // \W+ means more than one non word chaacter
regEx = /number \d999/;    // \d means digit
regEx = /number \d+999/;   // \d+ means more then one digit
regEx = /\D999/;           // \D means non digit
regEx = /\D+999/;          // \D+ means more then one non digit
regEx = /\ska number/      // \s means match only one whitespace chharacter
regEx = /\s+ka number/     // \s+ means match one or more then one whitespace chharacter
regEx = /\Ska number/      // \S means match only one non whitespace chharacter
regEx = /\S+ka number/     // \S+ means match one or more then one non whitespace chharacter
regEx = /4k8k\b/           // word boundary

// Assertion
regEx = /k(?=g)/;
regEx = /k(?!g)/;

const str = "ania5i1k4k8k $$%@bhai anikgka number 899999anik9999";



let result = regEx.exec(str);
console.log("Thr result from exec is", result);

if(regEx.test(str)) {
    console.log(`The string "${str}" matches the expression "${regEx.source}"`);
}
else{
    console.log(`The string "${str}" does not matches the expression "${regEx.source}"`);
}