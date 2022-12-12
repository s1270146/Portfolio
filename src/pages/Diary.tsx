import React from "react";
import style from "./main.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import dartImage from "../images/dart.png";

function Diary() {
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
          Blog
        </motion.h1>
        <a href="https://awake-split-999.notion.site/Flutter-Dart-immutable-363e87e806e844969d416b872b8d1437">
          <motion.article
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
          >
            <img src={dartImage} alt="" />
            <div className={style.article_sentence}>
              <h2>【Flutter】【Dart】immutableについて【メモ】</h2>
              <p>
                riverpodを使うためにfreezedを使うためにdartのimmutableについて調べたものをメモしました。
              </p>
            </div>
          </motion.article>
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default Diary;
