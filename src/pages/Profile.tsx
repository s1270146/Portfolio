import React from "react";
import style from "./main.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

function Profile() {
  return (
    <div className={style.App}>
      <Header />
      <main>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 2,
          }}
        >
          Profile
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          Name
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 2,
            }}
          >
            森 航洋 Koyo Mori
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.6,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          Birth Date
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8,
              duration: 2,
            }}
          >
            2000/4/24
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          Hometown
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.2,
              duration: 2,
            }}
          >
            東京都調布市
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.4,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          University
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.6,
              duration: 2,
            }}
          >
            会津大学(福島県会津若松市)
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.8,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          Skills
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3,
              duration: 2,
            }}
          >
            言語 : Dart(Flutter), Python, SageMath, C/C++, Java
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.2,
              duration: 2,
            }}
          >
            ツール : Git, Docker
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.4,
              duration: 2,
            }}
          >
            サービス : Firebase
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.6,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          Research
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.8,
              duration: 2,
            }}
          >
            楕円曲線暗号,公開鍵暗号,ポラードのρ法
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 4,
            duration: 2,
          }}
          className={style.profile_h2}
        >
          Comment
        </motion.h2>
        <div className={style.profile_div_out_of_p}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 4.2,
              duration: 2,
            }}
          >
            このポートフォリオを作成するために、はじめてReactを使用
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 4.4,
              duration: 2,
            }}
          >
            Docker上でFlutter,Python,MySQLを使ったアプリ作成中
          </motion.p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
