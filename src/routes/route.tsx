import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      {
        index : true,
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path : "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
