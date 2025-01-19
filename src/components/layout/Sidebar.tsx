import { Menu, Layout } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../routes/Admin.routes";
import { StudentPaths } from "../../routes/Student.routes";
import { FacultyPaths } from "../../routes/Faculty.routes";
import { TSidebarProps, TUserRoles } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
// const userRole = { Admin: "admin", Faculty: "faculty", Student: "student" };
const { Sider } = Layout;

const Sidebar = () => {
  const role = useAppSelector(selectCurrentUser)?.role;
  let sidebarItems;
  if ("admin" === role) {
    sidebarItems = AdminPaths;
  } else if ("faculty" === role) {
    sidebarItems = FacultyPaths;
  } else if ("student" === role) {
    sidebarItems = StudentPaths;
  }

  return (
    <Sider
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        zIndex: 100,
        left: 0,
      }}
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
        items={sidebarItemsGenerator(
          sidebarItems as TSidebarProps[],
          role as TUserRoles
        )}
      />
    </Sider>
  );
};

export default Sidebar;
