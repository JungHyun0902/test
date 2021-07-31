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