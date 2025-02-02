const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  lighting: {
    type: Number,
    required: true
  },
  // wind: {
  //   type: Number,
  //   required: true
  // },
  receivedAt: {
    type: Date,
    default: Date.now // Automatically save the current time when data is received
  }
}, { collection: 'sensorData' });
// third argument define collection target
const SensorData = mongoose.model('sensorData', sensorDataSchema, 'sensorData');

module.exports = SensorData;
