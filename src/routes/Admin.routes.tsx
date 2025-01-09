import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPath = [
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
  ]