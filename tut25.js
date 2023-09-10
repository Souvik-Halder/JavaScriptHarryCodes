console.log("js prototype Inheritance");

const proto = {
    slogan : function(){
        return `this company is the  best`;
    },
    changeName : function(newName){
        this.name = newName;
    }
}
// console.log(proto);


// This creates Anik  object:
let anik = Object.create(proto);
anik.name = "Anik";
anik.role = "Programmer";
// anik.changeName("Anik Raj");
// console.log(anik)

// This also creates anik object:
const anik1 = Object.create(proto, {
    name : {value : 'Anik', writable: true},
    role : {value : 'Programmer'},
});
// anik1.name = "rajanik";
anik1.changeName("rajAnik")

// console.log(anik1);


//Employee Constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//Adding slogan to the (constructur <-)Employee's prototype
Employee.prototype.slogan = function(){
    return `this company is the  best. Regards, ${this.name}`;
}

// creating an object from this constructor now
let anikObj = new Employee('Anik', 85000, 12);

console.log(anikObj.slogan());

// programmer construcor
function Programmer(name, salary, experience, lang){
    Employee.call(this, name, salary, experience);
    this.lang = lang;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// manually settting the constructor
Programmer.prototype.constructor = Programmer;

let vicky = new Programmer("Vicky", 35000, 2, "javaScript");
console.log(vicky);