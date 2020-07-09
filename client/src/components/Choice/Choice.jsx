import React from 'react';

import './Choice.css';

const Choice = ({ displayName, name, choices, changeModel, model }) => {
  return (
    <div className='choice'>
      <span className='choice-name'>{displayName}</span>
      <ul className='choice-list'>
        {choices.map((choice) => (
          <li
            key={choice}
            className={`choices ${model[name] === choice ? 'choices-selected': ''}`}
            onClick={() => changeModel(name, choice)}
          >
            {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Choice;
