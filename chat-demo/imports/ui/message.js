import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Messages } from '../api/messages.js';

import './message.html';

Template.body.helpers({
    messages: () => {
        return Messages.find({});
    }
});