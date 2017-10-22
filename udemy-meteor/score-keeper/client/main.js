import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from '../imports/api/players';
import App from '../imports/ui/App';


// let renderPlayers = players => players.map(p => <Player key={p._id} player={p} />);

Meteor.startup(() => {
  let title = 'Score Keeper';
  let subtitle = 'Created by Igor Igeto!';
  Tracker.autorun(() => {
    let players = Players.find({}, { sort: { score: -1 }}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers} />, document.getElementById('app'));
  });
});