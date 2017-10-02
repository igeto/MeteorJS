import { Template } from 'meteor/templating';

import './task.js'
import './body.html';

Template.body.events({
    tasks: [
        {text: 'Task 1'},
        {text: 'Task 2'},
        {text: 'Task 3'}
    ]
});