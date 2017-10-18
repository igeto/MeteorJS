import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import PlayerList from '../imports/ui/PlayerList';


// let renderPlayers = players => players.map(p => <Player key={p._id} player={p} />);

Meteor.startup(() => {
  let title = 'Score Keeper';
  let subtitle = 'Created by Igor Igeto!';
  Tracker.autorun(() => {
    let players = Players.find({}).fetch();
    let jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle} />
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});