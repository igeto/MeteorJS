import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

import SimpleSchema from "simpl-schema";

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links.find({ userId: this.userId });
    });
}

Meteor.methods({
    'links.insert'(url) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('no user found', 'You need to be logged in to insert a new link');
        }

        new SimpleSchema({
            url: {
                type: String,
                label: 'Your link',
                regEx: SimpleSchema.RegEx.Url
            }
        }).validate({ url });

        Links.insert({
            url,
            userId: this.userId
        });
    }
});