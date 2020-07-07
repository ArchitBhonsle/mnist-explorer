import React from 'react';

import './Cell.css';

const Cell = ({ ind, val, setGrid, mouseClicked, cellSize }) => {
  return (
    <div
      className='cell'
      style={{
        padding         : `${Math.floor(cellSize / 2)}px`,
        backgroundColor : `${val ? 'white' : 'black'}`
      }}
      onMouseMove={() => {
        if (mouseClicked)
          setGrid((grid) => {
            grid[ind] = 1;
            return grid;
          });
      }}
    />
  );
};

export default Cell;
