import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from "meteor/meteor";

import { Links } from "../../api";

export class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    };

    componentDidMount() {
        Meteor.subscribe('links');
        this.linksTracker = Tracker.autorun(() => {
            this.setState({ links: Links.find().fetch() });
        });
    };

    componentWillUnmount() {
        this.linksTracker.stop();
    };

    renderLinksListItems() {
        return this.state.links.map(l => <p key={l._id}>{l.url}</p>);
    }

    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    };
}