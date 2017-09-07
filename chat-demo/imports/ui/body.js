import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { check } from 'meteor/check';

import { Messages } from '../api/messages.js';

import './body.html';
import './message.js';
import './user.js';

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('messages');
    
});

Template.body.events({
    'submit .new-message'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Meteor.call('messages.insert', text);

        target.text.value = '';
    },
});