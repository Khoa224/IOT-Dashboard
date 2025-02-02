const express = require('express');
const connectDB = require('./db/dbConnect');
const http = require('http');
const socketIo = require('socket.io');
const { Server } = require('socket.io');
const mqtt = require('mqtt');
const cors = require("cors");
const mongoose = require('mongoose');
const SensorData = require('./db/sensorModel');
const HistoryData = require('./db/historyModel');
const Sensor = require('./db/deviceModel');
// Initialize Express and HTTP server
const app = express();
const server = http.createServer(app);
// const io = socketIo(server);
// io.on('connection', (socket) => {
//   console.log('A client connected:', socket.id);

//   socket.on('disconnect', () => {
//     console.log('Client disconnected:', socket.id);
//   });
// });
app.use(cors({
  origin: 'http://localhost:3000'  // Allow requests from your frontend
}));
// app.use(cors());
app.use(express.json());
// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
connectDB('mongodb://localhost:27017', 'admin');

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   // Example: Emitting a confirmation message
//   socket.on("deviceControl", (data) => {
//     io.emit("deviceConfirmation", data); // This sends confirmation to all connected clients
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });


// Connect to Mosquitto broker
const mqttClient = mqtt.connect('mqtt://dodangkhoa:b21dccn068@localhost:1885');
// const mqttClient = mqtt.connect('mqtt://dodangkhoa:b21dccn068@192.168.43.114:1885');
// // Serve static files for the frontend
app.use(express.static('public'));

// // Handle incoming MQTT messages
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  mqttClient.subscribe('#', (err) => {
    if (err) {
      console.error('Failed to subscribe:', err);
    }
  });
});

// // Handle MQTT messages and send data to frontend via WebSocket
mqttClient.on('message', async (topic, message) => {

  try {
    if (topic.startsWith('test/topic')) {
      let sensorData;

      // Attempt to parse message as JSON
      try {
        sensorData = JSON.parse(message.toString());
      } catch (e) {
        // If parsing fails, check if the message is a string and handle it accordingly
        if (typeof message === 'string') {
          sensorData = { status: message.toString() }; // Wrap it in an object
        } else {
          throw e; // Rethrow if not a valid string
        }
      }

      const newSensorData = new SensorData({
        temperature: sensorData.temperature,
        humidity: sensorData.humidity,
        lighting: sensorData.lighting,
        wind: sensorData.wind
      });

      await newSensorData.save();
      console.log('Sensor data saved to MongoDB:', newSensorData);
      console.log(`Received data from ${topic}:`, sensorData);
    }
    // Save the sensor data to MongoDB
    if (topic.startsWith('home/confirmation/')) {
      // Extract the LED ID from the topic, e.g., 'led1' from 'home/confirmation/led1'
      const device = topic.split('/').pop();
      const state = message.toString() === 'ON' ? 'ON' : 'OFF';
      const topicMap = {
        ac: 'water',
        led1: 'light',
        fan: 'temperature',
        A1: 'A1',
        B2: 'B2',
        C3: 'C3'
      };
      
      updatedDevice = await Sensor.findOneAndUpdate(
        { name: topicMap[device] },
        { 
          state: state,
          $inc: state === 'ON' ? { onCount: 1 } : {},
         },
        { new: true, upsert: true }
      );
      if (updatedDevice) {
        console.log('Updated Device:', updatedDevice);
      } else {
        console.log('No device found or updated.');
      }
      // console.log(`Confirmation received for ${device}:`, sensorData.status);
    } 
    
  } catch (error) {
    console.error('Error processing MQTT message or saving to MongoDB:', error);
  }
});


app.get('/admin/sensorData', async (req, res) => {
  try {
    // Fetch query parameters for pagination, sorting, and filtering
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const sortBy = req.query.sortBy || 'receivedAt'; // default sorting field
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

    // Calculate the number of documents to skip for pagination
    const skip = (page - 1) * limit;

    // Construct filter object with greater than, less than, or exact conditions
    const filters = {};
    if (req.query.temperatureMin) {
      filters.temperature = { ...filters.temperature, $gte: parseFloat(req.query.temperatureMin) };
    }
    if (req.query.temperatureMax) {
      filters.temperature = { ...filters.temperature, $lte: parseFloat(req.query.temperatureMax) };
    }
    if (req.query.humidityMin) {
      filters.humidity = { ...filters.humidity, $gte: parseFloat(req.query.humidityMin) };
    }
    if (req.query.humidityMax) {
      filters.humidity = { ...filters.humidity, $lte: parseFloat(req.query.humidityMax) };
    }
    if (req.query.lightingMin) {
      filters.lighting = { ...filters.lighting, $gte: parseFloat(req.query.lightingMin) };
    }
    if (req.query.lightingMax) {
      filters.lighting = { ...filters.lighting, $lte: parseFloat(req.query.lightingMax) };
    }

    // Optional exact match for receivedAt (if provided)
    if (req.query.receivedAt) {
      filters.receivedAt = new Date(req.query.receivedAt);
    }

    // Fetch sorted, paginated, and filtered data
    const sensorData = await SensorData.find(filters)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);

    // Fetch the total count of filtered data for pagination metadata
    const totalCount = await SensorData.countDocuments(filters);

    res.json({
      data: sensorData,
      pagination: {
        total: totalCount,
        page,
        limit,
      },
    });
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).send("Server error");
  }
});

// get historyData for table2
app.get('/admin/historyData', async (req, res) => {
  try {
    // Fetch query parameters for pagination and sorting
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 100;
    const sortBy = req.query.sortBy || 'receivedAt'; // default sorting field
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

    // Calculate the number of documents to skip for pagination
    const skip = (page - 1) * limit;

    // const filters = {};
    

    // // Optional exact match for receivedAt (if provided)
    // if (req.query.receivedAt) {
    //   filters.receivedAt = new Date(req.query.receivedAt);
    // }

    // Fetch sorted and paginated data
    const historyData = await HistoryData.find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);

    // Fetch the total count for pagination metadata
    const totalCount = await HistoryData.countDocuments();

    res.json({
      data: historyData,
      pagination: {
        total: totalCount,
        page,
        limit,
      },
    });
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).send("Server error");
  }
});


// app.get('/status', async (req, res) => {
//   try {
//     const devices = await Sensor.find();  // Fetch all devices
//     const deviceStates = {};

//     // Map devices by name to their status
//     devices.forEach(device => {
//       deviceStates[device.name] = device.status;
//     });

//     res.status(200).json(deviceStates);
//   } catch (error) {
//     console.error('Error fetching device statuses:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// control devices
app.post('/api/control', async (req, res) => {
  const { device, status } = req.body;

  const topicMap = {
    water: 'home/ac',
    light: 'home/led1',
    temperature: 'home/fan',
    A1: 'home/A1',
    B2: 'home/B2',
    C3: 'home/C3'
  };

  const topic = topicMap[device];
  if (!topic) {
    return res.status(400).send({ error: 'Invalid device' });
  }

  let updatedDevice; 
  try {
    await mqttClient.publish(topic, status);

    // try {
    //   updatedDevice = await Sensor.findOneAndUpdate(
    //     { name: device },
    //     { state: status },
    //     { new: true, upsert: true }
    //   );
    //   if (updatedDevice) {
    //     console.log('Updated Device:', updatedDevice);
    //   } else {
    //     console.log('No device found or updated.');
    //   }
    // } catch (error) {
    //   console.error('Error updating device:', error);
    // }



    // Save control history
    const newHistory = new HistoryData({
      sensor: device,
      status: status,
      time: new Date()
    });
    await newHistory.save();

    console.log(`MQTT message sent to ${topic}: ${status}`);
    console.log("Status received:", status);
    // console.log("Updated device:", updatedDevice);

    res.status(201).send({ message: `Device ${device} set to ${status}`, history: newHistory });
  } catch (error) {
    console.error('Error handling control request:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.post('/api/control2', async (req, res) => {
  const { device, status } = req.body;

  const topicMap = {
    A1: 'home/A1',
    B2: 'home/B2',
    C3: 'home/C3'
  };

  const topic = topicMap[device];
  if (!topic) {
    return res.status(400).send({ error: 'Invalid device' });
  }

  let updatedDevice; 
  try {
    await mqttClient.publish(topic, status);

    try {
      updatedDevice = await Sensor.findOneAndUpdate(
        { name: device },
        { state: status },
        { new: true, upsert: true }
      );
      if (updatedDevice) {
        console.log('Updated Device:', updatedDevice);
      } else {
        console.log('No device found or updated.');
      }
    } catch (error) {
      console.error('Error updating device:', error);
    }



    // Save control history
    const newHistory = new HistoryData({
      sensor: device,
      status: status,
      time: new Date()
    });
    await newHistory.save();

    console.log(`MQTT message sent to ${topic}: ${status}`);
    console.log("Status received:", status);
    // console.log("Updated device:", updatedDevice);

    res.status(201).send({ message: `Device ${device} set to ${status}`, history: newHistory });
  } catch (error) {
    console.error('Error handling control request:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


//search api
app.get("/api/search", async (req, res) => {
  try {
    const { query, column, limit = 10, page = 1, all, collection } = req.query;

    // Define mappings for each collection
    const collectionMappings = {
      SensorData: {
        model: SensorData,
        columns: {
          Id: "_id",
          Temperature: "temperature",
          Humidity: "humidity",
          Lighting: "lighting",
          Time: "receivedAt",
        },
      },
      HistoryData: {
        model: HistoryData,
        columns: {
          Id: "_id",
          Sensor: "sensor",
          Status: "status",
          Time: "receivedAt",
          // Add more mappings as needed
        },
      },
    };

    // Check if the requested collection exists
    const selectedCollection = collectionMappings[collection];
    if (!selectedCollection) {
      return res.status(400).json({ error: "Invalid collection specified." });
    }

    const { model, columns } = selectedCollection;

    // Validate that the column exists in our mapping
    const mongoColumn = columns[column];
    if (!mongoColumn) {
      return res.status(400).json({ error: "Invalid column for search" });
    }

    // Build the search query
    let searchQuery = {};
    if (query) {
      if (column === "Time") {
        // Convert `receivedAt` to string and perform regex match
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        console.log("Escaped Query:", escapedQuery);
        searchQuery = {
          $expr: {
            $regexMatch: {
              input: { 
                $dateToString: { 
                  format: "%d/%m/%Y, %H:%M:%S", 
                  date: `$${mongoColumn}`,
                  timezone: "Asia/Bangkok"
                }
              },
              regex: `^${escapedQuery}`,
              // regex: `^25/11/2024, 17`,
              options: "i"  // Case-insensitive search
            }
          }
        
        };
        console.log("Search Query:", JSON.stringify(searchQuery, null, 2));
        
      }  else if (["Temperature", "Humidity", "Lighting"].includes(column)) {
        // Numeric columns
        const numericQuery = parseFloat(query);
        if (isNaN(numericQuery)) {
          return res.status(400).json({ error: "Query must be a valid number for numeric columns." });
        }
        searchQuery = { [mongoColumn]: numericQuery };
      } else {
        // For other non-numeric fields, use regex
        searchQuery = { [mongoColumn]: { $regex: new RegExp(query, "i") } };
      }
    }
   
    let results;
    if (all === "true") {
      // Fetch all matching documents without pagination
      results = await model.find(searchQuery).sort({ [columns.Time || columns.DateCreated]: -1 });
    } else {
      // Pagination logic
      const pageSize = parseInt(limit);
      const pageIndex = parseInt(page) - 1;
      results = await model.find(searchQuery)
        .sort({ [columns.Time || columns.DateCreated]: -1 })
        .skip(pageIndex * pageSize)
        .limit(pageSize);
    }

    const totalResults = await model.countDocuments(searchQuery);

    res.json({
      results,
      totalResults,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get device list
app.get("/devices", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const devices = await Sensor.find({}).limit(limit);
    res.json(devices);
  } catch (error) {
    console.error("Error fetching device list:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});






app.get("/message", (req, res) => {
  res.send({ message: "Hello from server!" });
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});

// server.listen(3000, () => {
//   console.log(`Server listening on port 3000`);
// });
