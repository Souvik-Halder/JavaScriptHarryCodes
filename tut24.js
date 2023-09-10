console.log('Object prototype in javaScript:');

// Object literal : Object.prototype
let obj = {
    name: "Anik Raj",
    learning: "javaScript",
    address: "Bihar"
}
console.log(obj);

// If you want to edit object.prototype then make your own object or constructor and edit 
// the  don't do the Object.prototype
function Obj(givenName) {
    this.name = givenName
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    this.name = newName;
} 

let obj2 = new Obj("Anik");
console.log(obj2);