import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';


Meteor.startup(() => {
  // Players.insert(
  //   {
  //     name: 'Igeto',
  //     score: 22
  //   }
  // );
  // console.log(Players.find().fetch());

  let numbers = [9, 99, 4, 56];

  let newNumbers = numbers.map(n => ++n);

  console.log(newNumbers);
});