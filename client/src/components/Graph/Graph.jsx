import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { defaults } from 'chart.js';

defaults.global.defaultFontColor = '#fff';
defaults.global.defaultFontSize = 15;
defaults.global.defaultFontFamily = 'Montserrat';

const colors = [
  '#f44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722'
];

const getColor = () => colors[Math.floor(Math.random() * 16)];

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
  const data = {
    labels   : labels,
    datasets : accuracyData.map((ad) => createDataset(ad))
  };
  console.log(data);
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
