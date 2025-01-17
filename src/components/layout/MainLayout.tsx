/* import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom"; */
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
// import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
// import { AdminPaths } from "../../routes/Admin.routes";
// import { adminSidebarItems } from "../../routes/Admin.routes";
// const { Header, Content, Sider } = Layout;
const { Header, Content } = Layout;
/* const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
      },
      {
        key:"Create Faculty",
        label:  <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
      },
      {
        key:"Create Student",
        label:  <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
      },
    ],
  },
]; */
const MainLayout = () => {
  const dispatch = useAppDispatch();


  const handleLogout = () => {
    dispatch(logout());
    toast.success("logout successfully")

  }


  return (
    <Layout style={{ height: "100%" }}>
     {/*  <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Ph University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          // items={items}
          // items={adminSidebarItems}
          items={sidebarItemsGenerator(AdminPaths , "faculty")}
        />
      </Sider> */}
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0, display: "flex", alignItems: "center", justifyContent: "end" }}>
          <Button onClick={handleLogout}>Log Out</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
           <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
