import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { defaults } from 'chart.js';

defaults.global.defaultFontColor = '#fff';
defaults.global.defaultFontSize = 15;
defaults.global.defaultFontFamily = 'Montserrat';

const colors = [
  '#ff1744',
  '#3d5afe',
  '#1de9b6',
  '#ffea00',
  '#f50057',
  '#2196F3',
  '#2979ff',
  '#00e676',
  '#ffc400',
  '#d500f9',
  '#00b0ff',
  '#76ff03',
  '#ff9100',
  '#651fff',
  '#00e5ff',
  '#c6ff00',
  '#ff3d00'
];

let ind = 0;

const getColor = () => {
  ind = (ind + 1) % 16;
  return colors[ind];
};

const labels = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

const options = {
  responsive : true,
  title      : {
    display : true,
    text    : 'Accuracy of various models'
  },
  tooltips   : {
    mode      : 'index',
    intersect : false
  },
  hover      : {
    mode      : 'nearest',
    intersect : true
  },
  scales     : {
    xAxes : [
      {
        display    : true,
        scaleLabel : {
          display     : true,
          labelString : 'Epoch'
        }
      }
    ],
    yAxes : [
      {
        display    : true,
        scaleLabel : {
          display     : true,
          labelString : 'Accuracy'
        }
      }
    ]
  }
};

const createDataset = ([ modelName, accuracy ]) => {
  const color = getColor();

  return {
    label           : modelName,
    backgroundColor : color,
    borderColor     : color,
    data            : accuracy,
    fill            : false
  };
};

const Graph = ({ accuracyData }) => {
  ind = 0;
  const data = {
    labels   : labels,
    datasets : accuracyData.map((ad) => createDataset(ad))
  };
  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{
        x          : 0,
        transition : { type: 'tween', duration: 1, ease: 'easeOut' }
      }}
    >
      <Line data={data} height={600} width={800} options={options} />
    </motion.div>
  );
};

export default Graph;
