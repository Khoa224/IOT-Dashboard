const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state:{
    type: String,
    required: true
  }, 
  onCount: {
    type: Number,
    default: 0, // Initialize with 0
  },
}, { collection: 'sensor' });
// third argument define collection target
const Sensor = mongoose.model('sensor', sensorSchema, 'sensor');

module.exports = Sensor;
