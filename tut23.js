console.log('javaScript tut23 : Object literals, constructor And object oriented js');

// Object literal for creating objects:
let car = {
    name:'Maruti 800',
    topSpeed: 90,
    run: function() {
        console.log("car is running");
    }
}

// We have already seen constructors like these:
// new Date();

// Creating a constructor for cars:
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run= function(){
        console.log(`${this.name} is running at the speed of ${this.topSpeed}km/h`); 
    }
    this.analyze = function() {
        console.log(`This car is slower by ${200-this.topSpeed}km/h than Mini Cooper`);
    }
        
    }


car1 = new GeneralCar('Range Rover', 160);
car2 = new GeneralCar('Mercedes', 120);

console.log(car);
console.log(car1);
console.log(car2);