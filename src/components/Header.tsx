import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import symbol from "../images/pascal.png";
import MediaQuery from "react-responsive";
import { motion } from "framer-motion";
import { stack as Menu } from "react-burger-menu";
import "./burger.css";

export const Header = () => {
  return (
    <header className={style.App_header}>
      <Link to="/">
        <img src={symbol} alt="" />
      </Link>
      <MediaQuery minWidth={600}>
        <nav>
          <ul>
            <li>
              <Link to="/profile">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  PROFILE
                </motion.div>
              </Link>
            </li>
            <li>
              <Link to="/works">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WORKS
                </motion.div>
              </Link>
            </li>
            <li>
              <Link to="/diary">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BLOG
                </motion.div>
              </Link>
            </li>
            <li>
              <Link to="/research">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  RESEARCH
                </motion.div>
              </Link>
            </li>
          </ul>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={599}>
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
        >
          <Link to="/profile" className="bm-menu-a">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              PROFILE
            </motion.div>
          </Link>
          <Link to="/works" className="bm-menu-a">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              WORKS
            </motion.div>
          </Link>
          <Link to="/diary" className="bm-menu-a">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              BLOG
            </motion.div>
          </Link>
          <Link to="/research" className="bm-menu-a">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              RESEARCH
            </motion.div>
          </Link>
        </Menu>
      </MediaQuery>
    </header>
  );
};
