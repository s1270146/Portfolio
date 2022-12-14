import React from "react";
import style from "./main.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import dartImage from "../images/dart.png";
import flutterImage from "../images/flutter.png";

function Diary() {
  return (
    <div className={style.App}>
      <Header />
      <main>
        <h1
        >
          Blog
        </h1>
        <a href="https://awake-split-999.notion.site/Flutter-Riverpod-part1-f20b0f55b5964d938def00131fba220a">
          <article
          >
            <img src="https://riverpod.dev/ja/img/logo.png" alt="https://riverpod.dev/ja/img/logo.png" />
            <div className={style.article_sentence}>
              <h2>【Flutter】Riverpodについて part1【メモ】</h2>
              <p>
                今までStatefulWidgetを使って状態管理をしていたのですが、アルバイトでのチーム開発や個人で改善したい時に
                どうしても状態管理が複雑で難しくなってしまいました。そこで状態管理のパッケージRiverpodについての内容を学習程度にメモしました。
              </p>
            </div>
          </article>
        </a>
        <a href="https://awake-split-999.notion.site/Flutter-freezed-8ceb926c57d04db2af2076b91523a8bc">
          <article
          >
            <img src={flutterImage} alt="" />
            <div className={style.article_sentence}>
              <h2>【Flutter】freezedについて【メモ】</h2>
              <p>
                flutterのパッケージ「freezed」についてメモ程度にまとめました。
              </p>
            </div>
          </article>
        </a>
        <a href="https://awake-split-999.notion.site/Flutter-Dart-immutable-363e87e806e844969d416b872b8d1437">
          <article
          >
            <img src={dartImage} alt="" />
            <div className={style.article_sentence}>
              <h2>【Flutter】【Dart】immutableについて【メモ】</h2>
              <p>
                riverpodを使うためにfreezedを使うためにdartのimmutableについて調べたものをメモしました。
              </p>
            </div>
          </article>
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default Diary;
