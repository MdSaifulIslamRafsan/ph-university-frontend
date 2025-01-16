import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routesGenerator } from "../utils/routesGenerator";
import { FacultyPaths } from "./Faculty.routes";
import { StudentPaths } from "./Student.routes";
import { AdminPaths } from "./Admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routesGenerator(AdminPaths)
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routesGenerator(FacultyPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routesGenerator(StudentPaths)
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
