console.log('ES6 classes and Inheritance');

class Employee {

    constructor(givenName, givenExperience, givenCompany) {
        this.name = givenName;
        this.experience = givenExperience;
        this.company = givenCompany;
    }

    slogan() {
        return `I am ${this.name} and i wanna say that ${this.company} is the best IT compaany till now.`;
    }

    joiningYear() {
        return 2023-this.experience;
    }

    static add(a, b) {
        return a + b;
    }
}

// Inheritance using ES6 class
class Programmer extends Employee{ 
    constructor(givenName, givenExperience, givenCompany, lang, github) {
        super(givenName, givenExperience, givenCompany);
        this.lang = lang;
        this.github = github;
    }

    favoriteLang() {
        if(this.lang == 'Python') {
            return 'Python';
        }
        else {
            return 'JavaScript';
        }
    }

    static multiply(a, b) {
        return a*b;
    }

}

var anik = new Employee("Anik", 12,"TCS", "Data Analyst");
console.log(anik);
console.log(anik.slogan());
console.log(anik.joiningYear());
console.log(Employee.add(12, 21));
vicky = new Programmer("Vicky",7,"Amazon","Python","Vicky0306");
console.log(vicky);
console.log(vicky.favoriteLang());
console.log(Programmer.multiply(5, 9));
console.log(vicky.slogan());
