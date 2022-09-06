console.log('javaScript tut8');

// const age = 19;
// const age = 39;

//to make the type or value both equal, use '==='
const age = 20;
const doesDrive = false;

// if(age!=19){
//     console.log('Age is not 19');
// }
// if(age!==65){
//     console.log('Age is not 65');
// }
// else{
//     console.log('age is not 19');
// }

// to check whether the variable is defined or not
// if(typeof vari !=='undefined'){
//     console.log('Vari is defined');
// }
// else{
//     console.log('vari is not defined');
// } 


// if(doesDrive){
//     console.log('You can drive');
// }
// else{
//     console.log('You cannot drive');
// }


// if(doesDrive ||age>18){
//     console.log('You can drive');
// }
// else{
//     console.log('You cannot drive');
// }


//terinary operator is used
//if condition is true then first statement will print otherwise second statement will print.
// console.log(age==45? 'Age is 45': 'Age is not 45');

//switch case
switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 24:
        console.log('You are 24');
        break;
    case 30:
        console.log('You are 30');
        break;
    default:
        console.log('Your age is not matched with the above data');
        break;
}
