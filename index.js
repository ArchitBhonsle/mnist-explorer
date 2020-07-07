const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use('/models', express.static(path.join(__dirname, 'assets', 'models')));
app.use('/stats', express.static(path.join(__dirname, 'assets', 'stats')));

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
