import React, { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';

import './Grid.css';

const Grid = ({ setInput, width }) => {
  const [ grid, setGrid ] = useState(new Array(28 * 28).fill(0));
  const [ mouseClicked, setMouseClicked ] = useState(false);

  useEffect(
    () => {
      console.log(mouseClicked);
    },
    [ mouseClicked ]
  );

  const cellSize = Math.floor((width - 300) / 28);

  return (
    <div
      className='grid'
      onMouseDown={() => {
        setMouseClicked(true);
      }}
      onMouseUp={() => {
        setMouseClicked(false);
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
          onDoubleClick={() => {
            console.log('doubleClick');
            setGrid(new Array(28 * 28).fill(0));
          }}
        />
      ))}
    </div>
  );
};

export default Grid;
