import { Mongo } from 'meteor/mongo';

import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
    let rank = 1;
    let c = 0;
    return players.map((p, i) => {
        if(i !== 0 && players[i - 1].score > p.score) {
            rank++;
        }

        return {
            ...p,
            rank,
            position: numeral(rank).format('0o')
        }
    });
};