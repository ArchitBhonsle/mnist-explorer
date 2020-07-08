import React from 'react';

import './Cell.css';

const Cell = ({ ind, val, setGrid, mouseClicked, cellSize }) => {
  return (
    <div
      className='cell'
      style={{
        height          : `${cellSize}px`,
        width           : `${cellSize}px`,
        backgroundColor : `${val ? 'white' : 'black'}`
      }}
      onMouseOver={() => {
        if (mouseClicked)
          setGrid((grid) => {
            const newGrid = grid;
            newGrid[ind] = 1;
            return newGrid;
          });
      }}
    />
  );
};

export default Cell;
