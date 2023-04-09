import React from "react";
import style from "./login.module.css";
import NavBar from "../../Components/Navbar/NavBar";
import illustration from "../../assets/Pic.svg";

const Login = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.innerMain}>
          <NavBar />
          <div className={style.bottomContent}>
            <div className={style.istItem}>
              <div className={style.meetStrangers}>
                <b>
                  <p>Sign In to</p>
                  <p>Meet strangers</p>
                </b>
              </div>

              <div className={style.regHere}>
                <p>
                  <span>if you don't an account</span>
                  <div className={style.bckColor}></div>
                </p>

                <p>
                  <span>{`you can `}</span>
                  <button className={style.register_here}>
                    {" "}
                    Register here!
                  </button>
                </p>
              </div>
            </div>
            <div className={style.space}></div>

            <div className={style.secItem}>
              <img
                className={style.background_icon}
                alt="bg_img"
                src={illustration}
              />
            </div>
            <div className={style.centr}></div>

            <div className={style.thrItem}>
              <div className={style.form}>
                <div>
                  <input
                    className={style.enterEmail}
                    type="text"
                    placeholder="Enter Email"
                    color="black"
                  />
                </div>

                <div>
                  <input
                    className={style.password}
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <p className={style.rec_pass}>Recover password ?</p>
                </div>

                <div>
                  <button className={style.loginBtn}>Login</button>
                </div>

                <div className={style.notRegistered}>not registered?</div>
                <div className={style.regs_here}>
                  <p>
                    <span>{`you can `}</span>
                    <button className={style.register_Here2}>
                      Register here!
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
