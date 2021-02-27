import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

// Import MenuIcons
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";

// Import Framer motion
import { motion } from "framer-motion";

const Sider = () => {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("");

  const clickHandle = (e) => {
    setCurrent(e.key);
  };

  return (
    <motion.div
      className="humburger-container"
      >
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        onClick={clickHandle}
        style={{ backgroundColor: "transparent", color: "#fff", padding: "0" }}>
        <SubMenu key="humburger" title={<RiMenu4Fill />}>
          <Menu.Item key="projets" icon={<AiOutlineFileProtect />}>
            <Link to="/projets">Projets</Link>
          </Menu.Item>

          <Menu.Item key="skills" icon={<VscProject />}>
            <Link to="/compétences">Compétences</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </motion.div>
  );
};

export default Sider;
