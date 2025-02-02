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

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import LightModeIcon from "@mui/icons-material/LightMode";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import Switch from "@mui/material/Switch";
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";
import { Typography } from "@mui/material";
import axios from "axios";
import io from "socket.io-client";
// import io from "socket.io-client"; 
// const socket = io("http://localhost:5000");
// import mqtt from "mqtt";
// const mqttClient = mqtt.connect('mqtt://localhost:1885', {
//     username: 'dodangkhoa',  // Add your username if needed
//     password: 'b21dccn068'     // Add your password if needed
//   });
// const mqttClient = mqtt.connect('mqtt://dodangkhoa:b21dccn068@192.168.43.114:1885');
function Projects() {
  // const { columns, rows } = data();
  // const [menu, setMenu] = useState(null);

  // const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  // const closeMenu = () => setMenu(null);
  const [state, setState] = useState({
    // water: true,
    // light: true,
    // temperature: true,
  });

  const [loading, setLoading] = useState({
    A1: false,
    B2: false,
    C3: false,
  });

  const handleChange = async (event) => {
    const { name, checked } = event.target;
    setState((prevState) => ({ ...prevState, [name]: checked })); // Optimistic update for immediate feedback
    setLoading((prevLoading) => ({ ...prevLoading, [name]: true })); // Start loading

    const updatedState = { ...state, [name]: checked };
    localStorage.setItem('deviceStates', JSON.stringify(updatedState));

    // Prepare data to send to backend
    const deviceCommand = {
        device: name,  // e.g., 'water', 'light', 'temperature'
        status: checked ? 'ON' : 'OFF',  // Send "ON" if checked, "OFF" if unchecked
    };
    console.log(name, checked);
    try {
        // Send the control command to the backend
        await axios.post('http://localhost:5000/api/control', deviceCommand);
        
        // Poll backend to check for confirmation
        const pollForConfirmation = async () => {
          try {
              // Fetch the list of devices and their states
              const response = await axios.get(`http://localhost:5000/devices`);
              const devices = response.data;
      
              // Find the device with the matching name
              const device = devices.find((device) => device.name === name);
      
              // Check if the device's state matches the desired state
              if (device && device.state === (checked ? 'ON' : 'OFF')) {
                  setState((prevState) => ({ ...prevState, [name]: checked })); // Update switch state
                  setLoading((prevLoading) => ({ ...prevLoading, [name]: false })); // Stop loading
                  localStorage.setItem('deviceStates', JSON.stringify(updatedState));
              } else {
                  // Retry polling after a delay if state does not match
                  setTimeout(pollForConfirmation, 1000);
              }
          } catch (pollError) {
              console.error("Error polling device status:", pollError);
              setTimeout(pollForConfirmation, 1000); // Retry polling if an error occurs
          }
      };

        // Start polling for confirmation
        pollForConfirmation();

    } catch (error) {
        console.error(`Failed to control ${name}:`, error);
        setState((prevState) => ({ ...prevState, [name]: !checked })); // Revert state if there's an error
        setLoading((prevLoading) => ({ ...prevLoading, [name]: false })); // Stop loading on error
    }
};

  useEffect(() => {
    const fetchDeviceStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/devices');
        setState(response.data);  // Directly use the object from the backend
      } catch (error) {
        console.error("Failed to fetch device status:", error);
      }
    };
    const storedStates = localStorage.getItem('deviceStates');
    if (storedStates) {
      setState(JSON.parse(storedStates));
    } else {
      fetchDeviceStatus(); // Fetch from API if no local data
    }


    // const socket = io("http://localhost:5000"); // Update with your backend URL if needed

    // // Listen for confirmation messages
    // socket.on("deviceConfirmation", ({ device, status }) => {
    //   setState((prevState) => ({ ...prevState, [device]: status === "ON" }));
    //   setLoading((prevLoading) => ({ ...prevLoading, [device]: false }));
    // });

    // // Cleanup on unmount
    // return () => {
    //   socket.disconnect();
    // };
  }, []);


  return (
    <Card>
      <Box display="flex" justifyContent="space-between" width="100%" sx={{height : "100px"}} alignItems="center">
        <Box flex={1} display="flex" justifyContent="center" >
          <FormControlLabel
            control={
              <Switch
                checked={state.A1}
                onChange={handleChange}
                name="A1"
                color="success"
                sx={{ transform: "scale(3.3)" }}
                
              />
            }
            
            label={
              loading.A1 ? (
                <CircularProgress color="inherit" sx={{ transform: "scale(4)", ml: 7 }} />
              ) : state.A1 ? (
                <BatteryFullIcon sx={{ transform: "scale(4)", ml: 7 }} />
              ) : (
                <Battery0BarIcon sx={{ transform: "scale(4)", ml: 7 }} />
              )
            }
          />
        </Box>
        <Box flex={1} display="flex" justifyContent="center">
          <FormControlLabel
            control={
              <Switch
                checked={state.B2}
                onChange={handleChange}
                name="B2"
                color="primary"
                sx={{ transform: "scale(3.3)" }}
              />
            }
            
            label={
              loading.B2 ? (
                <CircularProgress color="inherit" sx={{ transform: "scale(4)", ml: 7 }} />
              ) : state.B2 ? (
                <BatteryFullIcon sx={{ transform: "scale(4)", ml: 7 }} />
              ) : (
                <Battery0BarIcon sx={{ transform: "scale(4)", ml: 7 }} />
              )
            }
          />
        </Box>
        <Box flex={1} display="flex" justifyContent="center">
          <FormControlLabel
            control={
              <Switch
                checked={state.C3}
                onChange={handleChange}
                name="C3"
                color="secondary"
                sx={{ transform: "scale(3.3)" }}
              />
            }
          
            label={
              loading.C3 ? (
                <CircularProgress color="inherit" sx={{ transform: "scale(4)", ml: 7 }} />
              ) : state.C3 ? (
                <BatteryFullIcon sx={{ transform: "scale(4)", ml: 7 }} />
              ) : (
                <Battery0BarIcon sx={{ transform: "scale(4)", ml: 7 }} />
              )
            }
          />
        </Box>
      </Box>
    </Card >
  );
}

export default Projects;
