import { Menu , Layout } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../routes/Admin.routes";
const { Sider } = Layout;

const Sidebar = () => {
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
          items={sidebarItemsGenerator(AdminPaths , "admin")}
        />
      </Sider>
    );
};

export default Sidebar;