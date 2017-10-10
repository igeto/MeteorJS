import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import './main.html';

Template.body.onCreated(() => {
  Meteor.subscribe('paragraphs')
})

Template.body.helpers({
  paragraphs() {
    return Mongo.Collection('paragraphs').find({});
  } 
});
