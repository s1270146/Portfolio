import React from "react";
import style from "./main.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import testApp from "../images/testApp.jpg";

function Works() {
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
          Works
        </motion.h1>
        <motion.article
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
        >
          <img src={testApp} alt="" />
          <div className={style.article_sentence}>
            <h2>React Nativeを使ってゲームを作ってみた!</h2>
            <p>
              今回、初めてReact
              Nativeでゲームを作成してみました。わからないことだらけで環境構築から一苦労。
              大学の仲間と作成するため、Dockerを使用しました。
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          <img src={testApp} alt="" />
          <div className={style.article_sentence}>
            <h2>FlutterとFirebaseで割り勘アプリ作成</h2>
            <p>
              FlutterとFirebaseを使って割り勘アプリを作成しました。
              旅行などで、「ここは誰が払って、あそこでは誰が払って」と誰が誰に払っていいかわからなくなる時があります。
              そんなときに簡単に計算をしてくれる機能を搭載！
            </p>
          </div>
        </motion.article>
      </main>
      <Footer />
    </div>
  );
}

export default Works;
