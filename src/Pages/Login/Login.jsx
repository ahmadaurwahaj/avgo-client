import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { signup } from "../../utils/api/authApi";
import { login } from "../../utils/api/authApi";
import { setToken } from "../../redux/Slices/authSlice";
import {
  updateIsLoggedIn,
  updateLoginInfo
} from "../../redux/Slices/userSlice";
import { notifyError } from "../../Components/NotifyError";
import style from "./Login.module.css";
import NavBar from "../../Components/Navbar/NavBar";
import illustration from "../../assets/Pic.svg";
import { ToastContainer } from "react-toastify";

const Login = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // let isLoggedIn = useSelector((state) => state?.user?.isLoggedIn);

  const handleLogin = useMutation(login, {
    onSuccess: data => {
      dispatch(setToken(data.token));
      dispatch(updateLoginInfo(data?.data?.user));
      console.log("User logged in successfully");

      navigate("/");
    },
    onError: error => {
      console.log("Login failed:", error);
      dispatch(updateIsLoggedIn(false));
      // Show error message to the user
      notifyError(error.message);
    }
  });

  const handleSignup = useMutation(signup, {
    onSuccess: data => {
      dispatch(setToken(data.token));
      dispatch(updateLoginInfo(data?.data?.user));
      navigate("/register2");
    },
    onError: error => {
      console.log("Signup failed:", error);
      notifyError(error);
    }
  });

  const submitForm = e => {
    e.preventDefault();
    if (type === "login") handleLogin.mutate({ email, password });
    else handleSignup.mutate({ email, password });
    // else navigate("/register2"); // todo: change this logic, its just temp.
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
      <ToastContainer />
    </>
  );
};
export default Login;
