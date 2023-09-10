console.log('Promise Basics: Promise.then(), Promise.catch()');

function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
        if(!error){
            console.log('Your promise has been resolved');
            resolve();
        }
        else {
            console.log('Your promise has not been resolved');
            reject('Sorry Babu');
        }
        }, 2000);
        
    })
}

func1().then(function() {
    console.log('Anik: Thanks or resolving');
}).catch(function(error) {
    console.log('Anik: Very bad of you ' +error)
})