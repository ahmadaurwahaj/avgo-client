import React from "react";
import style from "./login.module.css";
import illustration from "../../../../assets/Pic.svg";
function Login() {
  return (
    <div className={style.main}>
      <nav className={style["main-nav"]}>
        <div className={style.lng}>
          <select className={style.Language} id="language">
            <option value="eng">English</option>
            <option value="spa">Spanish</option>
            <option value="fre">French</option>
          </select>
        </div>

        <div className={style.log}>
          <button className={style.login2}>Login</button>
        </div>
        <div className={style.reg}>
          <button className={style.register}>Register</button>
        </div>
      </nav>
      <div className={style.flexbox_container}>
        <div className={`${style.flex_item} ${style["flex_item-1"]}`}>
          <div className={style.logo}>Logo</div>

          <div className={style.meet_strangers}>
            <b className={style["sign-in-to-container"]}>
              <p className={style["sign-in-to"]}>Sign In to</p>
              <p className={style["meet-strangers"]}>Meet strangers</p>
            </b>
          </div>
          <div className={style.bck_color}></div>

          <div className="reg_here">
            <p className="sign-in-to">
              <span className="if-you-dont">if you don't an account</span>
            </p>

            <p>
              <span className="if-you-dont">{`you can `}</span>
              <button className="register-here">
                {" "}
                <b>Register here!</b>
              </button>
            </p>
          </div>
        </div>

        <div className="flex_item flex_item-2">
          <img className="background-icon" alt="bg_img" src={illustration} />
        </div>

        <div className="flex_item flex_item-3">
          <div className="form">
            <div>
              <input
                className="enter-email"
                type="text"
                placeholder="Enter Email"
                color="black"
              />
            </div>

            <div>
              <input
                className="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <p className="rec_pass">Recover password ?</p>
          </div>

          <div>
            <button className="login-btn">
              <b>Login</b>
            </button>
          </div>

          <div className="not-registered">not registered?</div>

          <div className="regs_here">
            <p>
              <span className="you-can">{`you can `}</span>
              <button className="register-here">
                {" "}
                <b>Register here!</b>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// return <div>Login Page by me</div>;

// }

export default Login;
