import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../util/tetrominos';
import { STAGE_WIDTH } from '../util/gameHelpers';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });
    // above line is short for:
        // const playerState = useState();
        // const player = playerState[0];
        // const serPlayer = playerState[1];

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])
    
    return [player, updatePlayerPos, resetPlayer];
}