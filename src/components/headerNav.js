import React from "react";
import { NavLink } from "react-router-dom";

//Import social icons
import { ReactComponent as Behance } from "../assets/icons/behance.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Dribble } from "../assets/icons/dribble.svg";

// Import Humburger Component
import Sider from "./humburger";

// Import framer-motion
import { motion } from "framer-motion";

const HeaderNav = () => {
  return (
    <motion.div
      className="nav-container"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 70 }}>
      <header>
        <motion.div
          className="logo-container"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
          <NavLink to="/" className="logo" exact>
            MOZaRT
          </NavLink>
        </motion.div>

        <motion.nav
          className="nav-links"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}>
          <NavLink to="/projets" exact>
            Projets
          </NavLink>
          <NavLink to="/compétences" exact>
            Compétences
          </NavLink>
        </motion.nav>
        <div className="humberger-menu">
          <Sider />
        </div>
      </header>
      <div className="social-header">
        <motion.ul
          className="social-links"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}>
          <li>
            <motion.a href="https://behance.com" target="blank">
              <Behance className="behance" />
            </motion.a>
          </li>
          <li>
            <motion.a href="https://instagram.com" target="blank">
              <Instagram className="instagram" />
            </motion.a>
          </li>
          <li>
            <motion.a href="https://dribble.com" target="blank">
              <Dribble className="dribble" />
            </motion.a>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default HeaderNav;
