import { Menu, Layout } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../routes/Admin.routes";
import { StudentPaths } from "../../routes/Student.routes";
import { FacultyPaths } from "../../routes/Faculty.routes";
import { TSidebarProps } from "../../types";
const userRole = { Admin: "admin", Faculty: "faculty", Student: "student" };
const { Sider } = Layout;

const Sidebar = () => {
  const role = "student";
  let sidebarItems;
  if (userRole.Admin === role) {
    sidebarItems = AdminPaths;
  } else if (userRole.Faculty === role) {
    sidebarItems = FacultyPaths;
  } else if (userRole.Student === role) {
    sidebarItems = StudentPaths;
  }

  return (
    <Sider
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
        items={sidebarItemsGenerator(sidebarItems as TSidebarProps[], role)}
      />
    </Sider>
  );
};

export default Sidebar;
