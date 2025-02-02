/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// export default function data() {
//   const Author = ({ image, name, email }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDAvatar src={image} name={name} size="sm" />
//       <MDBox ml={2} lineHeight={1}>
//         <MDTypography display="block" variant="button" fontWeight="medium">
//           {name}
//         </MDTypography>
//         <MDTypography variant="caption">{email}</MDTypography>
//       </MDBox>
//     </MDBox>
//   );

//   const Job = ({ title, description }) => (
//     <MDBox lineHeight={1} textAlign="left">
//       <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
//         {title}
//       </MDTypography>
//       <MDTypography variant="caption">{description}</MDTypography>
//     </MDBox>
//   );

//   return {
//     columns: [
//       { Header: "author", accessor: "author", width: "45%", align: "left" },
//       { Header: "function", accessor: "function", align: "left" },
//       { Header: "status", accessor: "status", align: "center" },
//       { Header: "employed", accessor: "employed", align: "center" },
//       { Header: "action", accessor: "action", align: "center" },
//     ],

//     rows: [
//       {
//         author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
//         function: <Job title="Manager" description="Organization" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             23/04/18
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             11/01/19
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
//         function: <Job title="Executive" description="Projects" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             19/09/17
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             24/12/08
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
//         function: <Job title="Manager" description="Executive" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             04/10/21
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//       {
//         author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
//         function: <Job title="Programator" description="Developer" />,
//         status: (
//           <MDBox ml={-1}>
//             <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
//           </MDBox>
//         ),
//         employed: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             14/09/20
//           </MDTypography>
//         ),
//         action: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             Edit
//           </MDTypography>
//         ),
//       },
//     ],
//   };
// }
export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      // { Header: "", accessor: "author", width: "45%", align: "left" },
      // { Header: "function", accessor: "function", align: "left" },
      { Header: "Id", accessor: "Id", align: "center" },
      { Header: "Temperature", accessor: "Temperature", align: "center" },
      { Header: "Humidity", accessor: "Humidity", align: "center" },
      { Header: "Brightness", accessor: "Brightness", align: "center" },
      { Header: "Time", accessor: "Time", align: "center" },
    ],

    rows: [
      {
        "Id": 1,
        "Temperature": 73,
        "Humidity": 26,
        "Brightness": 83,
        "Time": "01/03/2022 11:32:37"
      },
      {
        "Id": 2,
        "Temperature": 75,
        "Humidity": 28,
        "Brightness": 80,
        "Time": "01/04/2022 12:15:24"
      },
      {
        "Id": 3,
        "Temperature": 70,
        "Humidity": 30,
        "Brightness": 78,
        "Time": "01/05/2022 12:45:50"
      },
      {
        "Id": 4,
        "Temperature": 72,
        "Humidity": 27,
        "Brightness": 85,
        "Time": "01/06/2022 13:05:12"
      },
      {
        "Id": 5,
        "Temperature": 74,
        "Humidity": 25,
        "Brightness": 82,
        "Time": "01/07/2022 13:35:45"
      },
      {
        "Id": 6,
        "Temperature": 71,
        "Humidity": 29,
        "Brightness": 79,
        "Time": "01/08/2022 14:10:05"
      },
      {
        "Id": 7,
        "Temperature": 76,
        "Humidity": 24,
        "Brightness": 86,
        "Time": "01/09/2022 14:40:33"
      },
      {
        "Id": 8,
        "Temperature": 69,
        "Humidity": 31,
        "Brightness": 77,
        "Time": "01/10/2022 15:00:50"
      },
      {
        "Id": 9,
        "Temperature": 74,
        "Humidity": 26,
        "Brightness": 84,
        "Time": "01/11/2022 15:25:17"
      },
      {
        "Id": 10,
        "Temperature": 72,
        "Humidity": 27,
        "Brightness": 81,
        "Time": "01/12/2022 16:02:33"
      },
      {
        "Id": 11,
        "Temperature": 75,
        "Humidity": 25,
        "Brightness": 80,
        "Time": "01/13/2022 16:30:42"
      },
      {
        "Id": 12,
        "Temperature": 73,
        "Humidity": 28,
        "Brightness": 83,
        "Time": "01/14/2022 17:05:19"
      },
      {
        "Id": 13,
        "Temperature": 71,
        "Humidity": 30,
        "Brightness": 85,
        "Time": "01/15/2022 17:30:55"
      },
      {
        "Id": 14,
        "Temperature": 70,
        "Humidity": 32,
        "Brightness": 78,
        "Time": "01/16/2022 18:00:03"
      },
      {
        "Id": 15,
        "Temperature": 69,
        "Humidity": 31,
        "Brightness": 77,
        "Time": "01/17/2022 18:35:12"
      },
      {
        "Id": 16,
        "Temperature": 76,
        "Humidity": 23,
        "Brightness": 86,
        "Time": "01/18/2022 19:10:22"
      },
      {
        "Id": 17,
        "Temperature": 72,
        "Humidity": 29,
        "Brightness": 81,
        "Time": "01/19/2022 19:45:40"
      },
      {
        "Id": 18,
        "Temperature": 74,
        "Humidity": 27,
        "Brightness": 82,
        "Time": "01/20/2022 20:20:33"
      },
      {
        "Id": 19,
        "Temperature": 75,
        "Humidity": 26,
        "Brightness": 85,
        "Time": "01/21/2022 20:50:18"
      },
      {
        "Id": 20,
        "Temperature": 71,
        "Humidity": 28,
        "Brightness": 84,
        "Time": "01/22/2022 21:15:50"
      }
    ]    
    // rows: [
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         1
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         12
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         13
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         14
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         2
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         13
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         14
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         15
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         3
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         14
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         15
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         16
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         4
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         15
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         16
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         17
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         5
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         16
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         17
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         18
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         6
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         17
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         18
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         19
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         7
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         18
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         19
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         20
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         8
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         19
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         20
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         21
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         9
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         20
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         21
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         22
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         10
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         21
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         22
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         23
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         11
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         22
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         23
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         24
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         12
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         23
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         24
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         25
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     Id: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         13
    //       </MDTypography>
    //     ),
    //     Temperature: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         24
    //       </MDTypography>
    //     ),
    //     Humidity: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         25
    //       </MDTypography>
    //     ),
    //     Brightness: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         26
    //       </MDTypography>
    //     ),
    //   },
    // ],
  //   rows: [
  //     {
  //       Id: 1,
  //       Temperature: 12,
  //       Humidity: 13,
  //       Brightness: 14,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 2,
  //       Temperature: 17,
  //       Humidity: 43,
  //       Brightness: 67,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 3,
  //       Temperature: 64,
  //       Humidity: 78,
  //       Brightness: 96,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 4,
  //       Temperature: 23,
  //       Humidity: 76,
  //       Brightness: 45,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 5,
  //       Temperature: 18,
  //       Humidity: 83,
  //       Brightness: 94,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 6,
  //       Temperature: 12,
  //       Humidity: 64,
  //       Brightness: 93,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 7,
  //       Temperature: 30,
  //       Humidity: 13,
  //       Brightness: 73,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 8,
  //       Temperature: 60,
  //       Humidity: 94,
  //       Brightness: 31,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 9,
  //       Temperature: 74,
  //       Humidity: 43,
  //       Brightness: 38,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 10,
  //       Temperature: 93,
  //       Humidity: 92,
  //       Brightness: 62,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 11,
  //       Temperature: 75,
  //       Humidity: 62,
  //       Brightness: 15,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 12,
  //       Temperature: 52,
  //       Humidity: 68,
  //       Brightness: 16,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //     {
  //       Id: 13,
  //       Temperature: 73,
  //       Humidity: 26,
  //       Brightness: 83,
  //       Time: "01/03/2022 11:32:37"
  //     },
  //   ],
  // };
    
  };
}
