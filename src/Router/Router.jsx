import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import { Children } from "react";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoute from "./Routes/PrivateRoute";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPublishedJobs from "../Pages/MyPublishedJobs/MyPublishedJobs";
import ViewApplications from "../Pages/ViewApllications/ViewApplications";
import { baseUrl } from "../Api/applicationsApi";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout ,
    children: [
      {
        index: true,
        Component: Home ,
      },
      {
        path:'jobs/:id',
        Component:JobDetails,
        loader:({params})=> fetch(`${baseUrl}jobs/${params.id}`)
      },
      {
        path:'jobApply/:id',
        element:<PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },
      {
        path:'myApplications',
        element:<PrivateRoute>
          <MyApplications></MyApplications>
        </PrivateRoute>
      },
      {
        path:'addJob',
        element:<PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
      },
      {
        path:'myPostedJob',
         element:<PrivateRoute>
          <MyPublishedJobs></MyPublishedJobs>
        </PrivateRoute>
      },
      {
        path:'applications/:job_id',
         element:<PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({params})=> fetch(`${baseUrl}applications/job/${params.job_id}`)
      },
      {
        path: "register",
        Component: Register ,
      },
      {
        path: "login",
        Component:Login
      },
     
    ],
  },
]);
