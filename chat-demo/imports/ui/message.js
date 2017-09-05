import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';

import { Messages } from '../api/messages.js';

import './message.html';

Template.body.helpers({
    message: () => {
        return Messages.find({});
    }
});