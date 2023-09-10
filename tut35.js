console.log('Error handling and try catch:');

// Pretend that this is coming from server as response:
let a = "Anik Raj";
a = undefined;
if(a != undefined) {
    throw new Error('This  is not undefined');
    // console.log('This  is not undefined');
}
else {
    console.log('This is undefined');
}

try {
    // nsdifsdihngj
    console.log('We are inside try block');
    funAnik();
} catch (error) {
    console.log('Are you okay?');
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log('Finally we will run this');
}