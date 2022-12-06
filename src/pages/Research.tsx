import React from "react";
import style from "./main.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

function Research() {
  return (
    <div className={style.App}>
      <Header />
      <main>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
        >
          Research
        </motion.h1>
      </main>
      <Footer />
    </div>
  );
}

export default Research;
