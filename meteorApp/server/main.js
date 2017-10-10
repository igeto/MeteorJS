import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Paragraphs = new Mongo.Collection('paragraphs');

Meteor.publish('paragraphs', () => {
  return Paragraphs.find({});
});

Meteor.methods({

});

Meteor.startup(() => {
  // code to run on server at startup
});
