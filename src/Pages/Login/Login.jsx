import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import NavBar from "../../Components/Navbar/NavBar";
import illustration from "../../assets/Pic.svg";

const Login = ({ type }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = e => {
    e.preventDefault();
    let item = { email, password };
    console.log("item", item);
    if (type === "login") navigate("/");
    else navigate("/register2");
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.innerMain}>
          <NavBar type={type} />
          <div className={style.bottomContent}>
            <div className={style.istItem}>
              <div className={style.meetStrangers}>
                <b>
                  {type !== "register" ? <p>Sign In to</p> : <p>Register to</p>}

                  <p>Meet strangers</p>
                </b>
              </div>

              <div className={style.regHere}>
                <p>
                  {type !== "register" ? (
                    <span>If you don't have an account</span>
                  ) : (
                    <span>If you have an account</span>
                  )}

                  <div className={style.bckColor}></div>
                </p>

                <p>
                  <span>{`you can `}</span>
                  {type !== "register" ? (
                    <Link to="/register">
                      <button className={style.register_here}>
                        Register here!
                      </button>
                    </Link>
                  ) : (
                    <Link to="/Login">
                      <button className={style.register_here}>
                        Login here!
                      </button>
                    </Link>
                  )}
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
              <form className={style.form} onSubmit={submitForm}>
                <input
                  className={style.enterEmail}
                  type="email"
                  placeholder="Enter Email"
                  onChange={e => setEmail(e.target.value)}
                  required
                ></input>
                <input
                  className={style.password}
                  type="password"
                  placeholder="••••••••"
                  onChange={e => setPassword(e.target.value)}
                  required
                ></input>
                {type === "register" ? (
                  <>
                    <button type="submit" className={style.loginBtn}>
                      Register
                    </button>
                    <div className={style.notRegistered}>
                      already registered?
                    </div>
                    <div className={style.regs_here}>
                      <p>
                        <span>{`you can `}</span>
                        <Link to="/login" className={style.register_Here2}>
                          Login here!
                        </Link>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className={style.rec_pass}>Recover password ?</p>

                    <button type="submit" className={style.loginBtn}>
                      Login
                    </button>
                    <div className={style.notRegistered}>not registered?</div>
                    <div className={style.regs_here}>
                      <p>
                        <span>{`you can `}</span>
                        <Link to="/register" className={style.register_Here2}>
                          Register here!
                        </Link>
                      </p>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
