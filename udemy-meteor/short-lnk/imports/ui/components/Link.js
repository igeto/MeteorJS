import React from 'react';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import { Links } from "../../api";
import {LinksList} from './LinksList';

export class Link extends React.Component {
    onLogout() {
        Accounts.logout();
        browserHistory.push('/');
    }

    onSubmit(e) {
        e.preventDefault();
        const url = this.refs.url.value.trim();

        if (url) {
            Links.insert({ url });
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
                <LinksList />
                <p>Add link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type='text' ref='url' placeholder='URL' />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}