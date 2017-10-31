import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";

import SimpleSchema from "simpl-schema";

import '../imports/api/links';
import '../imports/api/users';
import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
  // WebApp.connectHandlers.use((req, res, next) => {

  // });
});
