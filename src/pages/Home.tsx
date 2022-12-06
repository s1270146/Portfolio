import React from "react";
import style from "./home.module.scss";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className={style.App}>
      <main className={style.App_main}>
        <div className={style.App_list}>
          <Link to="/profile">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <TypeAnimation
                sequence={[5000, "Profile", 5000, "PROFILE"]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                speed={10}
                className={style.App_type}
              ></TypeAnimation>
            </motion.div>
          </Link>
          <Link to="/works">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <TypeAnimation
                sequence={[5000, "Works", 5000, "WORKS"]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                speed={2}
                className={style.App_type}
              ></TypeAnimation>
            </motion.div>
          </Link>
          <Link to="/diary">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <TypeAnimation
                sequence={[5000, "Blog", 5000, "BLOG"]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                speed={10}
                className={style.App_type}
              ></TypeAnimation>
            </motion.div>
          </Link>
          <Link to="/research">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <TypeAnimation
                sequence={[5000, "Research", 5000, "RESEARCH"]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                speed={10}
                className={style.App_type}
              ></TypeAnimation>
            </motion.div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
