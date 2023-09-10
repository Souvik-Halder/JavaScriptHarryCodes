console.log('Regular Expression: Metacharacters in JS');

let regEx = /Anikgg/;
console.log(regEx);

//Lets look into some metschaacters symbol

regEx = /^An/;      // ^ means expression will match if string starts with
regEx = /ik$/;      // $ means expression will match if string ends with
regEx = /A.ik/      // . means matches any one character
regEx = /A*ik/      // * means matches 0 or more characters
regEx = /Anr?ikr?/  // ? after character means that character is optional
regEx = /A\*nik/    // matches the actual abstrict sign

let str = "Anik is Anik because his name is Anik";

let result = regEx.exec(str);
console.log("The result from exec is" ,result);

if(regEx.test(str)) {
    console.log(`the string "${str}" matches the expression "${regEx.source}"`);
}
else {
    console.log(`the string "${str}" does not matches the expression "${regEx.source}"`);
}