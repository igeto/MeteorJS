import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import { Notes } from '../lib/collections.js';

import './main.html';

//Accounts config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.body.helpers({
  //create array of notes
  // notes: [
  //   {text: 'My Note 1'},
  //   {text: 'My Note 2'},
  //   {text: 'My Note 3'},
  // ]
  //get data from collection and give to view
  notes() {
    return Notes.find({});
  }
});

Template.note.events({
  'click .delete-note'(event) {
    Meteor.call('notes.remove', this);
    // Notes.remove(this._id);
    return false;
  }
});

Template.add.events({
  'submit .add-form'(event) {
    event.preventDefault();

    //Get input value
    const target = event.target;
    const text = target.text.value;

    //insert note into collection
    Meteor.call('notes.insert', text);
    // Notes.insert({
    //   text,
    //   createdAt: new Date(),
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username
    // });

    //clear form
    target.text.value = '';

    //close modal
    $('#addModal').modal('close');
    return false;
  }
});
