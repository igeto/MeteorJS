import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


import './user.html';

Template.user.helpers({
    usersOnline()  {
        return Meteor.users.find({ 'status.online': true });
    }
})
