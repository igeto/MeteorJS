import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';


Meteor.startup(() => {
  
  let yearBuilt = 1995;
  let newHouse = {
    bedrooms: 3,
    flooring: 'Carpet'
  }
  let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    ...newHouse,
    yearBuilt
  }
  console.log(house)
  // class Person {
  //   constructor(name = 'Goce od rabota', age = 0) {
  //     this.name = name,
  //     this.age = age
  //   }
  //   getGreeting() {
  //     return `Hi, I'm ${this.name}`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`;
  //   }
  // }
  
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage
  //   }
  //   getGreeting() {
  //     return `Hi I'm ${this.name} and I am ${this.preferredLanguage} developer.`;
  //   }
  // }

  // let me = new Programmer('Igor', 29, 'JavaScript');
  // console.log(me.getGreeting());
});