import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';


let renderPlayers = players => players.map(p => (
  <div key={p._id}>
    {p.name} has {p.score} point(s).
    <button onClick={() => Players.update({_id: p._id}, {$inc: {score: 1}})}>+1</button>
    <button onClick={() => Players.update({_id: p._id}, {$inc: {score: -1}})}>-1</button>
    <button onClick={() => Players.remove({_id: p._id})}>X</button>
  </div>)
);

const handleSubmit = (e) => {
  e.preventDefault();

  let name = e.target.playerName.value;

  if(name) {
    Players.insert({
      name,
      score: 0
    });
    e.target.playerName.value = '';
  }
}

Meteor.startup(() => {
  let title = 'Score Keeper';
  Tracker.autorun(() => {
    let players = Players.find({}).fetch();
    let jsx = (
      <div>
        <h1>{title}</h1>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type='text' name='playerName' placeholder='Player name' />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});