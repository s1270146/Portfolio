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
        <h1>Blog</h1>
        <a href="https://awake-split-999.notion.site/Flutter-FVM-4fd6f7465647427183df1d86df057625">
          <article>
            <img src={flutterImage} alt="" />
            <div className={style.article_sentence}>
              <h2>【Flutter】FVMについて</h2>
              <p></p>
            </div>
          </article>
        </a>
        <a href="https://awake-split-999.notion.site/Flutter-FVM-4fd6f7465647427183df1d86df057625">
          <article>
            <img src="https://riverpod.dev/ja/img/logo.png" alt="" />
            <div className={style.article_sentence}>
              <h2>【Flutter】Riverpodについて part2【メモ】</h2>
              <p></p>
            </div>
          </article>
        </a>
        <a href="https://awake-split-999.notion.site/SciPy-t-89f8fc12bc3b410b8d501fd556fb6389">
          <article>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtatXVk-WJXgxKgT8r_RsRxQmBxd6dri4yMro0dwdkNRkku7umOhqRDZR2maRBCVK9xm0&usqp=CAU"
              alt=""
            />
            <div className={style.article_sentence}>
              <h2>【統計】SciPyを使ってt検定を行う</h2>
              <p>
                研究で出てきた二種類のデータの平均で比較していたところ、教授から「統計学を使ってもっと詳しく比較してみた方がよい」と言われました。そこで二つのデータを比較するためのt検定というのを見つけました。
              </p>
            </div>
          </article>
        </a>
        <a href="https://awake-split-999.notion.site/Flutter-Riverpod-part1-f20b0f55b5964d938def00131fba220a">
          <article>
            <img
              src="https://riverpod.dev/ja/img/logo.png"
              alt="https://riverpod.dev/ja/img/logo.png"
            />
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
          <article>
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
          <article>
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
