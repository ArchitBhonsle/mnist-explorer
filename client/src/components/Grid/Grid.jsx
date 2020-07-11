import React, { useState } from 'react';
import Cell from '../Cell/Cell';

import './Grid.css';

const Grid = ({ grid, setGrid, limDim }) => {
  const [ mouseClicked, setMouseClicked ] = useState(false);

  const setMouseClickedTrue = () => setMouseClicked(true);
  const setMouseClickedFalse = () => setMouseClicked(false);

  const cellSize = 15;

  return (
    <div
      className='grid'
      style={{
        height : `${cellSize * 28}px`,
        width  : `${cellSize * 28}px`
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setMouseClickedTrue();
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        setMouseClickedFalse();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setMouseClickedFalse();
      }}
    >
      {grid.map((val, ind) => (
        <Cell
          key={ind}
          ind={ind}
          val={val}
          setGrid={setGrid}
          cellSize={cellSize}
          mouseClicked={mouseClicked}
        />
      ))}
    </div>
  );
};

export default Grid;
