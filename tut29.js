console.log('Callback function in js');

//Pretend that these response is coming from surver:
const students = [
    {name:"Anik", subject:"JavaScript"},
    {name:"Vicky", subject:"Python"},
    {name:"Aman", subject:"PHP"}   
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log('Students has been enrolled');
        callback();
    }, 5000);
}

function getStudent() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('Students have been fetched');
    }, 1000);
}

let newStudent = {name:"Hitesh", subject:"c++"}
enrollStudent(newStudent, getStudent);
// getStudent();