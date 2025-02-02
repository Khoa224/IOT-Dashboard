/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState, useEffect } from "react";
import axios from "axios";
// @mui material components
import Grid from "@mui/material/Grid";
import "@mui/icons-material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightModeIcon from "@mui/icons-material/LightMode";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard copy/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
// import { io } from "socket.io-client";
function Dashboard_2() {
  // const { Temperature, Humidity, Brightness } = reportsLineChartData;
  const [sensorData, setSensorData] = useState({
    Temperature: { labels: [], datasets: { label: "Temperature", data: [] } },
    Humidity: { labels: [], datasets: { label: "Humidity", data: [] } },
    Brightness: { labels: [], datasets: { label: "Brightness", data: [] } },
  });

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/sensorData?page=1&limit=10&sortBy=receivedAt&sortOrder=desc"); // Replace with your actual backend endpoint

        const data = response.data.data;

        // Extract only the last 10 points (or more depending on your requirement)
        const limitedData = data.slice(0, 5).reverse(); 
        // const latestTemperature = recentData[recentData.length - 1].temperature;
        // const latestHumidity = recentData[recentData.length - 1].humidity;
        // const latestBrightness = recentData[recentData.length - 1].lighting;
        // Map to prepare data for each chart
        const newSensorData = {
          Temperature: {
            labels: limitedData.map(entry => new Date(entry.receivedAt).toLocaleTimeString()), // X-axis: Time
            datasets: {
              label: "Temperature",
              data: limitedData.map(entry => entry.temperature), // Y-axis: Temperature values
            },
          },
          Humidity: {
            labels: limitedData.map(entry => new Date(entry.receivedAt).toLocaleTimeString()),
            datasets: {
              label: "Humidity",
              data: limitedData.map(entry => entry.humidity),
            },
          },
          Brightness: {
            labels: limitedData.map(entry => new Date(entry.receivedAt).toLocaleTimeString()),
            datasets: {
              label: "Brightness",
              data: limitedData.map(entry => entry.lighting), // Assuming 'lighting' is the key for brightness
            },
          },
        };

        setSensorData(newSensorData);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    // Fetch data initially and set an interval to update every 5 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Clear the interval when component unmounts
  }, []);
  const latestTemperature = sensorData.Temperature.datasets.data[4] || 0;
  const latestHumidity = sensorData.Humidity.datasets.data[4] || 0;
  const latestBrightness = sensorData.Brightness.datasets.data[4] || 0;

  // const socket = io();
  // socket.on('ledStatus', ({ ledId, status }) => {
  //   console.log(`Confirmation received for ${ledId}:`, status);
  //   // Update the switch or device status in your UI based on ledId and status
  // });
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12} >
              <Projects />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> */}
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard_2;
