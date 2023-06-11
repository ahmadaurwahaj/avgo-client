import React from "react";
// import style from "./Settings.module.css";
import style from "./Settings.module.css";
import SideBar from "../../Components/Sidebar/SideBar";
// import ShowMsg from "../../Components/ShowMsg/ShowMsg";
import EditBio from "../../Components/EditBio/EditBio";
import uicon from "../../assets/icons/usericon.svg";

import { Link } from "react-router-dom";
import TopBar from "../../Components/Topbar/TopBar";
function Settings() {
  return (

    <div className={style.main}>
      <div className={style.inner}>
      <div>
          <SideBar/>
        </div>
        <div className={style.left_container}></div>
        <div className={style.Rec_1}>
        <div className={style.Rec_2}>
        
        <div className={style.left_topbar}>
        <button className={style.set_btn}> Setting</button>
        <button className={style.logout_btn}> Logout</button>
        {/* <div className={style.bottom_container} >msg </div> */}
        </div>
        
        <div className={style.bottom_container} >
        <div className={style.Bio}>
        <div className={style.left_side} >
        <div className={style.left_userchat}>
                <div className={style.inner_chat}>
                  <div>
                    <EditBio textmsg="BIO will go down here no more than 100 words should go there" />
                  </div>
                
                </div>
              </div>
        
        </div>

        <div className={style.right_side} >
    <button className={style.edit_btn}> edit</button>
    </div>
        </div>


    <div className={style.password}>
    {/* <div className={style.top} ></div> */}


    <div className={style.left_side} >
    <div className={style.container}>Password
    <input className={style.input_wide}
     type="password" 
     placeholder="Current Password">
      </input>
  </div>
<div className={style.container1}>
<input className={style.input_small} type="password" placeholder="New Password"></input>
    <input className={style.input_small} type="password" placeholder="New Password"></input>
  </div>
    </div>


    <div className={style.right_side} >
    <button className={style.update_btn}> Update</button>
    </div>
  
    
    </div>
    <div className={style.gen_info}>
    <div className={style.info_container} >General info


    {/* <form className={style.Rec7} onSubmit={formHandler}> */}
          {/* <div className={style.Bbio}> */}
            {/* <label htmlFor="bi">Bio</label> */}

            {/* <textarea
              className={style.Bio}
              type="text"
              placeholder="Not more than 100 Words"
              required
              maxLength={100}
            /> */}

            <div className={style.bb}>
              <div className={style.Country}>
              

                <select className={style.country} id="country" required>
                  <option value="volvo">Country</option>
                  <option value="volvo">Pakistan</option>
                  <option value="saab">America</option>
                  <option value="mercedes">Mexico</option>
                  <option value="audi">France</option>
                </select>
              </div>

              <div className={style.Age}>
               
                <input
                  className={style.age}
                  type="number"
                  placeholder="Age"
                  required
                />
              </div>
            </div>
            <div className={style.Gender}>
              <label className={style.gender_h} htmlFor="id">
                Gender:
              </label>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" required />
                Female
              </label>
            </div>
            </div>
            <div className={style.right_side} >
    <button className={style.update_btn}> Update</button>
    </div>
            {/* <div className={style.Next}>
              <button type="submit" className={style.next_btn}>
                Next
              </button>
            </div> */}
          {/* </div> */}
        {/* </form> */}

    
    </div>
    </div>

</div>

        </div>

      </div>
    {/* <div>
      <p>Settings</p>
      <Link to="/video-calling">VideoCalling </Link>
      <Link to="/messages">Message </Link>
      <Link to="/settings">Settings </Link>
    </div> */}
    </div>
  );
}

export default Settings;
