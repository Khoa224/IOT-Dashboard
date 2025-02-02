// db.js
const mongoose = require('mongoose');

const connectDB = async (uri, dbName) => {
  try {
    const connection = await mongoose.connect(uri, {
      dbName: dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${dbName} database`);
    return connection;
  } catch (error) {
    console.error(`Error connecting to ${dbName} database:`, error);
  }
};

module.exports = connectDB;
