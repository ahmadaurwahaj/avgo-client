import React from "react";
import style from "./login.module.css";
import illustration from "../../../../assets/Pic.svg";
function Login() {
  return (
    <div className={style.main}>

<div className={style.innerMain}>

      <nav className={style.mainNav}>

<div className={style.leftBar}>
<div className={style.logo}>Logo</div>

</div>
<div className={style.rightBar}> 
        <div className={style.lng}>
          <select className={style.Language} id="language">
            <option value="eng">English</option>
            <option value="spa">Spanish</option>
            <option value="fre">French</option>
          </select>
        </div>

        <div className={style.log}>
          <button className={style.login2}>Login
          </button>
        </div>

        <div className={style.reg}>
          <button className={style.register}>Register
          </button>
        </div>
        </div>
      </nav> 
      
      <div className={style.bottomContent}>

        <div className={style.istItem}>
        <div className={style.meetStrangers}>
            <b>
              <p >Sign In to</p> 
              <p >Meet strangers</p>
            
            </b>
          </div>
          

          <div className={style.regHere}>
            <p >
              <span>if you don't an account</span>
              <div className={style.bckColor}></div>
            </p>

            <p >
              <span>{`you can `}</span>
              <button className={style.register_here}> <b>Register here!</b>
              </button>
            </p>
          </div>



        </div>
        <div className={style.secItem}>
        <img className={style.background_icon} alt="bg_img" src={illustration} />
        
        </div>



        <div className={style.thrItem}>
          <div className={style.form}>

          
        <div>
              <input className={style.enterEmail} type="text" placeholder="Enter Email" color="black" />

            </div>

            <div>
              <input className={style.password} type="password" placeholder="Password" />
            </div>
            <div>
            <p className={style.rec_pass}>Recover password ?</p>
          </div>

          <div>
            <button className={style.loginBtn}><b>Login</b></button>
          </div>

          <div
            className={style.notRegistered}>not registered?
          </div>
          <div className={style.regs_here}>
            <p >
              <span>{`you can `}</span>
              <button className={style.register_Here2}> <b>Register here!</b>
              </button>
            </p>

          </div>

          </div>

        </div>

      </div>
       
      </div>

    </div>
  );

}

// return <div>Login Page by me</div>;

// }

export default Login;
