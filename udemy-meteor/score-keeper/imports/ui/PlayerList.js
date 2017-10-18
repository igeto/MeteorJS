import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component {
    renderPlayers() {
       return this.props.players.map(p => <Player key={p._id} player={p} />);
    } 
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}