import React from 'react';
import PropTypes from 'prop-types';

import FlipMove from 'react-flip-move';

import Player from './Player';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if(this.props.players.length === 0) 
            return (
                <div className='item'>
                    <p className='item__message item__message--empty'>Add your first player to get started</p>
                </div>
            );
        else
            return this.props.players.map(p => <Player key={p._id} player={p} />);
    } 
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}