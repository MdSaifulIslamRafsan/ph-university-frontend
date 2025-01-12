import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

export const StudentPaths = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <AdminDashboard></AdminDashboard>,
    },
    {
      name: "Users Management",
      children: [
        {
          name: "Create Admin",
          path: "create-admin",
          element: <CreateAdmin></CreateAdmin>,
        },
        {
          name: "Create Faculty",
          path: "create-faculty",
          element: <CreateFaculty></CreateFaculty>,
        }
       
        
      ],
    },
  ];