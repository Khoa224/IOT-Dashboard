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
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Tables_2() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [columns] = useState([
    { Header: "Id", accessor: "Id", align: "center" },
    // { Header: "Temperature", accessor: "Temperature", align: "center" },
    { Header: "Sensor", accessor: "Sensor", align: "center" },
    { Header: "Status", accessor: "Status", align: "center" },
    { Header: "Time", accessor: "Time", align: "center" },
  ]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState([]);
  const [sortBy, setSortBy] = useState("receivedAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const [tableData, setTableData] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  // useEffect(() => {
  //   // Function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get("http://localhost:5000/admin/sensorData?page=1&limit=100&sortBy=receivedAt&sortOrder=desc");
  //       const response = await axios.get('http://localhost:5000/admin/sensorData', {
  //         params: {
  //           page: pageIndex,
  //           limit: pageSize,
  //           sortBy,
  //           sortOrder,
  //         },
  //       });
  //       const sensorData = response.data.data.map((data, index) => ({
  //         Id: index + 1,
  //         Temperature: data.temperature,
  //         Humidity: data.humidity,
  //         Lighting: data.lighting,
  //         Time: new Date(data.receivedAt).toLocaleString(),
  //       }));
  //       console.log(sensorData);
  //       setRows(sensorData); // .Reverse to show oldest first
  //     } catch (error) {
  //       console.error("Error fetching sensor data:", error);
  //     }
  //   };

  //   fetchData(); // Fetch data initially

  //   // Poll the server for updates every 5 seconds
  //   // const intervalId = setInterval(fetchData, 5000);

  //   // // Cleanup interval on component unmount
  //   // return () => clearInterval(intervalId);
  // }, [pageIndex, pageSize, sortBy, sortOrder]);


  useEffect(() => {
    if (query) {
      handleSearch(); // Fetch paginated search results
    } else {
      const fetchTableData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/admin/historyData', {
            params: {
              page: pageIndex,
              limit: pageSize,
              sortBy,
              sortOrder,
            },
          });
          
          // Set data and total entries from response
          setTableData(response.data.data);
          setTotalEntries(response.data.pagination.total);
        } catch (error) {
          console.error("Error fetching table data:", error);
        }
      };

      fetchTableData();
    }
  }, [pageIndex, pageSize, sortBy, sortOrder]);

  const handlePageChange = (newPage) => {
    setPageIndex(newPage);
  };

  // Change entries per page handler
  const handleEntriesPerPageChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPageIndex(1); // Reset to the first page
  };

  // Change sorting handler
  const handleSortChange = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sorting order
    } else {
      setSortBy(column);
      setSortOrder("asc"); // Set ascending order for new column
    }
  };

  const renderSortIcon = (column) => {
    if (sortBy === column) {
      return sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />;
    }
    return null;
  };


  const [query, setQuery] = useState('');
  const [column, setColumn] = useState('Sensor');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/search', {
        params: {
          query,
          column,
          all: false,
          page: pageIndex,
          limit: pageSize,
          collection: "HistoryData"
          // limit: 10,
          // page: 0,
        },
      });
      setTableData(response.data.results); 
      setTotalEntries(response.data.totalResults);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };


  const initiateSearch = () => {
    setPageIndex(1); // Reset to first page for new search
    handleSearch();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* <TextField id="sensor" label="Sensor" variant="outlined" sx={{ mb: 5 }}/> */}
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  History Data
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={true}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                  canSearch={true}
                /> */}
                <div>
                  <select value={column} onChange={(e) => setColumn(e.target.value)}>
                    <option value="Sensor">Sensor</option>
                    <option value="Status">Status</option>
                    {/* <option value="Lighting">Lighting</option> */}
                    <option value="Time">Time</option>
                  </select>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter search value"
                  />
                  <button onClick={initiateSearch}>Search</button>
                </div>
                {/* Select entries per page */}
                <div>
                  <label>Entries per page:</label>
                  <select onChange={(e) => handleEntriesPerPageChange(Number(e.target.value))} value={pageSize}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                </div>
                <table style={{ width: "100%", tableLayout: "fixed" }}>
                  <thead>
                    <tr style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" , width: "100%"}}>
                      <th >ID </th>
                      <th  onClick={() => handleSortChange('sensor')}>Sensor {renderSortIcon("sensor")}</th>
                      <th  onClick={() => handleSortChange('status')}>Status {renderSortIcon("status")}</th>
                      {/* <th  onClick={() => handleSortChange('lighting')}>Lighting {renderSortIcon("lighting")}</th> */}
                      <th  onClick={() => handleSortChange('receivedAt')}>Time {renderSortIcon("receivedAt")}</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={item._id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", width: "100%"}}>
                        <td style={{textAlign: "center", fontSize: "0.9rem"}}>{(pageIndex - 1) * pageSize + index + 1}</td>
                        <td style={{textAlign: "center", fontSize: "0.9rem"}}>{item.sensor}</td>
                        <td style={{textAlign: "center", fontSize: "0.9rem"}}> {item.status}</td>
                        {/* <td style={{textAlign: "center", fontSize: "0.9rem"}}>{item.lighting}</td> */}
                        <td style={{textAlign: "center", fontSize: "0.9rem"}}>{new Date(item.receivedAt).toLocaleString("en-GB", {hour12: false})}</td>
                        {/* <td style={{textAlign: "center", fontSize: "0.9rem"}}>
                          {new Date(item.receivedAt).toLocaleString("en-GB", { hour12: false }).replace(", ", " ")}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>

                 {/* Pagination Controls */}
                <div>
                  <button onClick={() => handlePageChange(pageIndex - 1)} disabled={pageIndex === 1}>
                    Previous
                  </button>
                  <span style={{ marginLeft: "10px", marginRight : "10px" }}>Page {pageIndex} of {Math.ceil(totalEntries / pageSize)}</span>
                  <button onClick={() => handlePageChange(pageIndex + 1)} disabled={pageIndex >= Math.ceil(totalEntries / pageSize)}>
                    Next
                  </button>
                </div>

                <div style={{ marginTop: "10px", textAlign: "left" }}>
                  Total entries: {totalEntries}
                </div>
                
  

              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables_2;
