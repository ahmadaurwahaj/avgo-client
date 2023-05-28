import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signup } from "../../utils/api";
import { login } from "../../utils/api";
import { setToken } from "../../redux/Slices/authSlice";

import style from "./Login.module.css";
import NavBar from "../../Components/Navbar/NavBar";
import illustration from "../../assets/Pic.svg";

const Login = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showErrorMsg = (msg) => {
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleLogin = useMutation(login, {
    onSuccess: (data) => {
      dispatch(setToken(data.token));
      navigate("/");
    },
    onError: (error) => {
      console.log("Login failed:", error);
      // Show error message to the user
      showErrorMsg(error);
    },
  });

  const handleSignup = useMutation(signup, {
    onSuccess: (data) => {
      dispatch(setToken(data.token));
      navigate("/register2");
    },
    onError: (error) => {
      console.log("Signup failed:", error);
      // Show error message to the user
      showErrorMsg(error);
    },
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (type === "login") handleLogin.mutate({ email, password });
    else handleSignup.mutate({ email, password });
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
                <input
                  className={style.password}
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
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
      <ToastContainer />
    </>
  );
};
export default Login;
