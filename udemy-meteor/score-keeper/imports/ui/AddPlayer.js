import React from 'react';
import PropTypes from 'prop-types';

import { Players }  from '../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
      
        let name = e.target.playerName.value;
        e.target.playerName.value = '';
        
        if(name) {
          Players.insert({
            name,
            score: this.props.score
          });
        }
    }
    render() {
        return (
            <div>            
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' name='playerName' placeholder='Player name' />
                    <button>Add Player</button>
                </form>
            </div>
       );
    }
}


AddPlayer.defaultProps = {
    score: 0
}