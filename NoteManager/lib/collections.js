import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');

if(Meteor.isServer){
    Meteor.publish('notes', function notesPublication(){
        return Notes.find({owner: Meteor.userId()})
    });
}

Meteor.methods({
    'notes.insert'(text) {
        check(text, String);

        //Check if user is logged in
        if(!Meteor.userId())
            throw new Meteor.Error('not-authorized');

        if(text !== '')
        Notes.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    'notes.remove'(note) {
        check(note._id, String);

        //Check if user is logged in
        if(!Meteor.userId() || note.owner !== Meteor.userId())
            throw new Meteor.Error('not-authorized');

        Notes.remove(note);
    }
});