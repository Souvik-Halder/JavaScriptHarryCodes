console.log('javaScript tut22 : Date object - date and time in js');

let today  = new Date();
console.log(today);
console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('june 13 1990');
// otherDate = new Date('11/16/2002');
console.log(otherDate);

// let a;
// a = otherDate.getDay(); // to print which s. no. of days of a week is there
// a = otherDate.getDate();
// a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
// a = otherDate.getMonth();
// a = otherDate.getTime();
// a = otherDate.getMilliseconds();
// console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1980);
otherDate.setHours(11);
otherDate.setMinutes(22);
otherDate.setSeconds(23);
console.log(otherDate);
