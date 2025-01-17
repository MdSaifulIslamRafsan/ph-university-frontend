// import {  ReactNode } from "react";
import AcademicDepartment from "../pages/admin/AcademicMenagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicMenagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicMenagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicMenagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicMenagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicMenagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
// import { NavLink } from "react-router-dom";

/* type TAdminRoute = {
  path: string;
  element: ReactNode;
};
 */
/* type TAdminSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TAdminSidebarItem[];
}; */

export const AdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Dashboard",
    index: true,
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
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      
    ],
  },
  {
    name: "Academic Management",
    children : [
      {
        name : "Create A... Semester",
        path : "create-academic-semester",
        element : <CreateAcademicSemester></CreateAcademicSemester>
      },
      {
        name : "Academic Semester",
        path : "academic-semester",
        element : <AcademicSemester></AcademicSemester>
      },
      {
        name : "Create A... Faculty",
        path : "create-academic-faculty",
        element : <CreateAcademicFaculty></CreateAcademicFaculty>
      },
      {
        name : "Academic Faculty",
        path : "academic-faculty",
        element : <AcademicFaculty></AcademicFaculty>
      },
      {
        name : "Create A... Department",
        path : "create-academic-department",
        element : <CreateAcademicDepartment></CreateAcademicDepartment>
      },
      {
        name : "Academic Department",
        path : "academic-department",
        element : <AcademicDepartment></AcademicDepartment>
      },
      
    ]
  }
];

/* export const adminSidebarItems = AdminPaths.reduce((acc: TAdminSidebarItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children : item.children.map(child => ({
          key : child.name,
          label : <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
      });
    }

    return acc;
  },
  []
);
 */
// programetical way
/* export const adminRoutes = AdminPaths.reduce((acc: TAdminRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []); */

// hardcoded routes
/* export const adminRoutes = [
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
  ] */
