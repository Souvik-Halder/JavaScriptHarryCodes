//Pretend that these response is coming from surver:
const students = [
    {name:"Anik", subject:"JavaScript"},
    {name:"Vicky", subject:"Python"},
    {name:"Aman", subject:"PHP"}   
]

function enrollStudent(student) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            students.push(student);
            console.log('Students has been enrolled');
            const error = false;  
            if(!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 2000);
    })
    
}

function getStudent() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Students have been fetched');
    }, 5000);
}

let newStudent = {name:"Hitesh", subject:"c++"}
enrollStudent(newStudent).then(getStudent).catch(function() {
    console.log('Some error occured');
});
// getStudent(); 