import React from "react";
import style from "./signup.module.css";
import TopBar from "../../Topbar/TopBar";
import AboutYou from "../../AboutYou/AboutYou";
const Singup = () => {
  return (
    <div className={style.main}>
      <div className={style.Rec2}>
        <div className={style.Rec1}>
          <div className={style.Rec3}>
            <div className={style.Rec4}>
              <div className={style.Rec5}>
                <div className={style.Rec6}>
                  <TopBar />
                  <AboutYou />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
