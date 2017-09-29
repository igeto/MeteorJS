import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

// import { Tasks } from '../api/tasks.js';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    // Delete task from database
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    // Make a task private (viisible only to owner)
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});