import React from "react";

import { createStage } from "../util/gameHelpers";

// Components:
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

const Tetris = ({ type }) => {
  return (
    <StyledTetrisWrapper>
      <h1 align="center">TETRIS</h1>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
      <footer>&copy;2019 Zhana Liner | Web Development</footer>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
