console.log('Regular Expression: Character Sets');

// const regEx = /^a/i;

let regEx = /A[a-z]ik/;      // can be any character from a to z
regEx = /A[eroy]ik/;         // can be either e, r, o or y
regEx = /A[^eroy]ik/;        // cannot be either e, r, o or y
regEx = /A[^eroy]i[rkt]/;    // multiple character set
regEx = /A[a-zA-Z]i[rkt]/;   // multiple character set with both uppercase and lowercase
regEx = /A[a-zA-Z]i[rkt0-9]/ // multiple character set with both uppercase, lowercase and numbers


//Quantifiers - we use square braces "[]""
regEx = /An{2}ik/;      // n can occur exact 2 times
regEx = /An{0,2}ik/;    // n can occur 0 to 2 times

//Groupings - we use parenthesis for groupings "()"
regEx = /A(nik){2}/;    // nik will be grouped and it can occur 2 times
regEx = /A(ni){3}([0-9]k){3}/;

// const str = "Anik Bhai";
// const str = "Anik Bhai";
// const str = "Aniknik Bhai";
const str = "Aninini1k4k8k Bhai";

let result = regEx.exec(str);
console.log("Thr result from exec is", result);

if(regEx.test(str)) {
    console.log(`The string "${str}" matches the expression ${regEx.source}`);
}
else{
    console.log(`The string "${str}" does not matches the expression ${regEx.source}`);
}