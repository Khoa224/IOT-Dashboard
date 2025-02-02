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

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

// export default function data() {
//   const Project = ({ image, name }) => (
//     <MDBox display="flex" alignItems="center" lineHeight={1}>
//       <MDAvatar src={image} name={name} size="sm" variant="rounded" />
//       <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
//         {name}
//       </MDTypography>
//     </MDBox>
//   );

//   const Progress = ({ color, value }) => (
//     <MDBox display="flex" alignItems="center">
//       <MDTypography variant="caption" color="text" fontWeight="medium">
//         {value}%
//       </MDTypography>
//       <MDBox ml={0.5} width="9rem">
//         <MDProgress variant="gradient" color={color} value={value} />
//       </MDBox>
//     </MDBox>
//   );

//   return {
//     columns: [
//       { Header: "project", accessor: "project", width: "30%", align: "left" },
//       { Header: "budget", accessor: "budget", align: "left" },
//       { Header: "status", accessor: "status", align: "center" },
//       { Header: "completion", accessor: "completion", align: "center" },
//       { Header: "action", accessor: "action", align: "center" },
//     ],

//     rows: [
//       {
//         project: <Project image={LogoAsana} name="Asana" />,
//         budget: (
//           <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//             $2,500
//           </MDTypography>
//         ),
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             working
//           </MDTypography>
//         ),
//         completion: <Progress color="info" value={60} />,
//         action: (
//           <MDTypography component="a" href="#" color="text">
//             <Icon>more_vert</Icon>
//           </MDTypography>
//         ),
//       },
//       {
//         project: <Project image={logoGithub} name="Github" />,
//         budget: (
//           <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//             $5,000
//           </MDTypography>
//         ),
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             done
//           </MDTypography>
//         ),
//         completion: <Progress color="success" value={100} />,
//         action: (
//           <MDTypography component="a" href="#" color="text">
//             <Icon>more_vert</Icon>
//           </MDTypography>
//         ),
//       },
//       {
//         project: <Project image={logoAtlassian} name="Atlassian" />,
//         budget: (
//           <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//             $3,400
//           </MDTypography>
//         ),
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             canceled
//           </MDTypography>
//         ),
//         completion: <Progress color="error" value={30} />,
//         action: (
//           <MDTypography component="a" href="#" color="text">
//             <Icon>more_vert</Icon>
//           </MDTypography>
//         ),
//       },
//       {
//         project: <Project image={logoSpotify} name="Spotify" />,
//         budget: (
//           <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//             $14,000
//           </MDTypography>
//         ),
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             working
//           </MDTypography>
//         ),
//         completion: <Progress color="info" value={80} />,
//         action: (
//           <MDTypography component="a" href="#" color="text">
//             <Icon>more_vert</Icon>
//           </MDTypography>
//         ),
//       },
//       {
//         project: <Project image={logoSlack} name="Slack" />,
//         budget: (
//           <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//             $1,000
//           </MDTypography>
//         ),
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             canceled
//           </MDTypography>
//         ),
//         completion: <Progress color="error" value={0} />,
//         action: (
//           <MDTypography component="a" href="#" color="text">
//             <Icon>more_vert</Icon>
//           </MDTypography>
//         ),
//       },
//       {
//         project: <Project image={logoInvesion} name="Invesion" />,
//         budget: (
//           <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
//             $2,300
//           </MDTypography>
//         ),
//         status: (
//           <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//             done
//           </MDTypography>
//         ),
//         completion: <Progress color="success" value={100} />,
//         action: (
//           <MDTypography component="a" href="#" color="text">
//             <Icon>more_vert</Icon>
//           </MDTypography>
//         ),
//       },
//     ],
//   };
// }
export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      // { Header: "project", accessor: "project", width: "30%", align: "left" },
      // { Header: "budget", accessor: "budget", align: "left" },
      { Header: "Sensor", accessor: "Sensor", align: "center" },
      { Header: "Status", accessor: "Status", align: "center" },
      { Header: "Time", accessor: "Time", align: "center" },
    ],

    // rows: [
    //   {
    //     // project: <Project image={LogoAsana} name="Asana" />,
    //     Sensor: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         1
    //       </MDTypography>
    //     ),
    //     Status: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Off
    //       </MDTypography>
    //     ),
    //     // completion: <Progress color="info" value={60} />,
    //     Time: (
    //       <MDTypography component="a" href="#" color="text">
    //         {/* <Icon>more_vert</Icon> */}
    //         01/03/2022 11:32:37
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     // project: <Project image={LogoAsana} name="Asana" />,
    //     Sensor: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         2
    //       </MDTypography>
    //     ),
    //     Status: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Off
    //       </MDTypography>
    //     ),
    //     // completion: <Progress color="info" value={60} />,
    //     Time: (
    //       <MDTypography component="a" href="#" color="text">
    //         {/* <Icon>more_vert</Icon> */}
    //         01/03/2022 11:32:37
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     // project: <Project image={LogoAsana} name="Asana" />,
    //     Sensor: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         3
    //       </MDTypography>
    //     ),
    //     Status: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         On
    //       </MDTypography>
    //     ),
    //     // completion: <Progress color="info" value={60} />,
    //     Time: (
    //       <MDTypography component="a" href="#" color="text">
    //         {/* <Icon>more_vert</Icon> */}
    //         01/03/2022 11:32:37
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     // project: <Project image={LogoAsana} name="Asana" />,
    //     Sensor: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         4
    //       </MDTypography>
    //     ),
    //     Status: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         On
    //       </MDTypography>
    //     ),
    //     // completion: <Progress color="info" value={60} />,
    //     Time: (
    //       <MDTypography component="a" href="#" color="text">
    //         {/* <Icon>more_vert</Icon> */}
    //         01/03/2022 11:32:37
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     // project: <Project image={LogoAsana} name="Asana" />,
    //     Sensor: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         5
    //       </MDTypography>
    //     ),
    //     Status: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         On
    //       </MDTypography>
    //     ),
    //     // completion: <Progress color="info" value={60} />,
    //     Time: (
    //       <MDTypography component="a" href="#" color="text">
    //         {/* <Icon>more_vert</Icon> */}
    //         01/03/2022 11:32:37
    //       </MDTypography>
    //     ),
    //   },
    // ],
    rows: [
      {
        "Sensor": 1,
        "Status": "ON",
        "Time": "01/03/2022 11:32:37"
      },
      {
        "Sensor": 2,
        "Status": "OFF",
        "Time": "01/04/2022 12:15:24"
      },
      {
        "Sensor": 3,
        "Status": "ON",
        "Time": "01/05/2022 13:45:50"
      },
      {
        "Sensor": 4,
        "Status": "OFF",
        "Time": "01/06/2022 14:05:12"
      },
      {
        "Sensor": 5,
        "Status": "ON",
        "Time": "01/07/2022 15:35:45"
      },
      {
        "Sensor": 6,
        "Status": "OFF",
        "Time": "01/08/2022 16:10:05"
      },
      {
        "Sensor": 7,
        "Status": "ON",
        "Time": "01/09/2022 17:40:33"
      },
      {
        "Sensor": 8,
        "Status": "OFF",
        "Time": "01/10/2022 18:00:50"
      },
      {
        "Sensor": 9,
        "Status": "ON",
        "Time": "01/11/2022 19:25:17"
      },
      {
        "Sensor": 10,
        "Status": "OFF",
        "Time": "01/12/2022 20:02:33"
      },
      {
        "Sensor": 11,
        "Status": "ON",
        "Time": "01/13/2022 21:30:42"
      },
      {
        "Sensor": 12,
        "Status": "OFF",
        "Time": "01/14/2022 22:05:19"
      },
      {
        "Sensor": 13,
        "Status": "ON",
        "Time": "01/15/2022 23:30:55"
      },
      {
        "Sensor": 14,
        "Status": "OFF",
        "Time": "01/16/2022 00:00:03"
      },
      {
        "Sensor": 15,
        "Status": "ON",
        "Time": "01/17/2022 01:35:12"
      },
      {
        "Sensor": 16,
        "Status": "OFF",
        "Time": "01/18/2022 02:10:22"
      },
      {
        "Sensor": 17,
        "Status": "ON",
        "Time": "01/19/2022 03:45:40"
      },
      {
        "Sensor": 18,
        "Status": "OFF",
        "Time": "01/20/2022 04:20:33"
      },
      {
        "Sensor": 19,
        "Status": "ON",
        "Time": "01/21/2022 05:50:18"
      },
      {
        "Sensor": 20,
        "Status": "OFF",
        "Time": "01/22/2022 06:15:50"
      }
    ],
  };
}
