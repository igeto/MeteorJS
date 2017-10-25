import React from 'react';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export class Link extends React.Component {
    onLogout() {
        Meteor.Accounts.logout();
        browserHistory.push('/');
    }
    render() {
        return (
            <div>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}