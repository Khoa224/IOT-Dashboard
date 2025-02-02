const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  sensor: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  receivedAt: {
    type: Date,
    default: Date.now // Automatically save the current time when data is received
  }
}, { collection: 'historyData' });
// third argument define collection target
const historyData = mongoose.model('historyData', historySchema, 'historyData');

module.exports = historyData;
