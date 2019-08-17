import React, { useState } from "react";

import { createStage, checkCollision } from '../util/gameHelpers';

// Components:
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import Instructions from './Instructions';

// Styled Components:
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

// Custom Hooks:
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over
      if (player.pos.y < 2) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  }

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
    >
      <h1 align="center">TETRIS</h1>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame}/>
          <Instructions text="PLAY > ARROWS" />
        </aside>
      </StyledTetris>
      <footer>&copy;2019 Zhana Liner | Web Development</footer>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
