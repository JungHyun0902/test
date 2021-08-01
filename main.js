import _ from 'lodash';

console.log('hello world');
console.log(_.camelCase('hello world'));

// function User (first, last) {
//   this.firstname = first
//   this.lastname = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`
// }

class User {
  constructor(first, last) {
    this.firstname = first
    this.lastname = last
  }
  getFullName () {
    return `${this.firstname} ${this.lastname}`
  }
}


const heropy = new User('Herpy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName()) 

////////////////////////////////////

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('애스턴마틴 발할라', 4, true)     
const daughtersCar = new Car('모닝', 4, true)
console.log(myCar)
console.log(daughtersCar)

//////////////////////////////////////////////////////////////