import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from "../imports/routes";
import { Links } from "../imports/api";

import '../imports/startup/simple-schema-config';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.user();
  onAuthChange(isAuthenticated);

});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});