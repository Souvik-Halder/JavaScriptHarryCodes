// console.log('js tut6');

// const a = 'Hlo guys,';
// const Name = 'Anik';
// const greeting = 'Good morning';
// console.log(greeting +' '+ name);

// let html;
// html = '<h1> This is heading</h1>' + 
//         '<p> This is my para</p>';


// javaScript important functions:

// for adding strings in front of existing string
// html = html.concat(' this', ' str');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

//to print the position char of string 
// console.log(html[6], html[8]);

// console.log(html.indexOf('This')); 
// console.log(html.indexOf('h1'));
// console.log(html.indexOf('fayu'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<')); 
// console.log(html.charAt(5));
// console.log(html.endsWith('str'));
// console.log(html.endsWith('str2'));
// console.log(html.includes('h1'));
// console.log(html.endsWith('fb'));
// console.log(html.substring(1,7));
// console.log(html.slice(-4));
// console.log(html.slice(0,4));
// console.log(html.split(''));
// console.log(html.split(' '));
// console.log(html.replace('This','It'));


// Template literals:

let Name = 'Anik'
let  fruit1 = 'Orange\'';
let  fruit2 = 'Apple';
let  myHtml = `Hello ${Name}
              <h1> this is my heading </h1>
              <p> you like ${fruit1} and ${fruit2}`;

document.body.innerHTML=  myHtml;
// console.log(myHtml)



