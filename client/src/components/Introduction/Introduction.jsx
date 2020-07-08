import React from 'react';

import './Introduction.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <h1 class='whats-mnist'>What's MNIST?</h1>
      <div class='description'>
        The MNIST database (Modified National Institute of Standards and
        Technology database) is a large database of handwritten digits that is
        commonly used for training various image processing systems. The
        database is also widely used for training and testing in the field of
        machine learning.
      </div>
      <div>
        <button class='go-visualize'>
          <span>Gimme graphs!</span>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
