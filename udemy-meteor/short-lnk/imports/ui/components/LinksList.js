import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Links } from "../../api";

export class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    };

    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            this.setState({ links: Links.find().fetch() });
            console.log('LinksList', this.state.links);
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