import React, { useState } from "react";
// import style from "./Settings.module.css";
import style from "./Settings.module.css";
import SideBar from "../../Components/Sidebar/SideBar";
// import ShowMsg from "../../Components/ShowMsg/ShowMsg";
import EditBio from "../../Components/EditBio/EditBio";
import uicon from "../../assets/icons/usericon.svg";
import TopBar from "../../Components/Topbar/TopBar";

import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  updateGeneralInfo,
  updatePassword,
} from "../../utils/api/updateUserApi";
import {
  clearUser,
  updateAge,
  updateCountry,
  updateGender,
} from "../../redux/Slices/userSlice";

import { notifyError } from "../../Components/NotifyError";
import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../../Components/NotifySuccess";

function Settings() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.token);
  const id = useSelector((state) => state.user.id);
  const email = useSelector((state) => state.user.email);

  const [bio, setBio] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = useMutation(updatePassword, {
    onSuccess: (data) => {
      notifySuccess("Password Updated");
    },
    onError: (error) => {
      notifyError(error.message);
    },
  });

  const handleGeneralInfo = useMutation(updateGeneralInfo, {
    onSuccess: (data) => {
      dispatch(updateCountry(country));
      dispatch(updateAge(age));
      dispatch(updateGender(gender));
      alert("General Info Updated");
    },
    onError: (error) => {
      alert("General Info updation failed");
    },
  });

  const passwordFormHandler = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Passwords and Confirm Password do not match");
    } else {
      handleUpdatePassword.mutate({
        id,
        email,
        currentPassword,
        newPassword,
        token,
      });
    }
  };

  const generalInfoFormHalder = (e) => {
    e.preventDefault();
    handleGeneralInfo.mutate({ id, age, country, gender, token });
  };

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <div>
          <SideBar />
        </div>
        <div className={style.left_container}></div>
        <div className={style.Rec_1}>
          <div className={style.Rec_2}>
            <div className={style.left_topbar}>
              <button className={style.set_btn}> Setting</button>
              <button
                className={style.logout_btn}
                onClick={() => {
                  dispatch(clearUser());
                }}
              >
                Logout
              </button>
              {/* <div className={style.bottom_container} >msg </div> */}
            </div>

            <div className={style.bottom_container}>
              <div className={style.Bio}>
                <div className={style.left_side}>
                  <div className={style.left_userchat}>
                    <div className={style.inner_chat}>
                      <div>
                        <EditBio textmsg="BIO will go down here no more than 100 words should go there" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={style.right_side}>
                  <button className={style.edit_btn}> edit</button>
                </div>
              </div>

              <form className={style.password} onSubmit={passwordFormHandler}>
                {/* <div className={style.top} ></div> */}

                <div className={style.left_side}>
                  <div className={style.container}>
                    Password
                    <input
                      className={style.input_wide}
                      type="password"
                      placeholder="Current Password"
                      // required
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className={style.container1}>
                    <input
                      className={style.input_small}
                      type="password"
                      placeholder="New Password"
                      // required
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    ></input>
                    <input
                      className={style.input_small}
                      type="password"
                      placeholder="Confirm New Password"
                      // required
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className={style.right_side}>
                  <button type="submit" className={style.update_btn}>
                    Update
                  </button>
                </div>
              </form>

              <form className={style.gen_info} onSubmit={generalInfoFormHalder}>
                <div className={style.info_container}>
                  General info
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
                      <select
                        className={style.country}
                        id="country"
                        required
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value="null">Country</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="america">America</option>
                        <option value="mexico">Mexico</option>
                        <option value="france">France</option>
                      </select>
                    </div>

                    <div className={style.Age}>
                      <input
                        className={style.age}
                        type="number"
                        placeholder="Age"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={style.Gender}>
                    <label className={style.gender_h} htmlFor="id">
                      Gender:
                    </label>
                    <label onChange={(e) => setGender(e.target.value)}>
                      <input type="radio" name="gender" value="male" />
                      Male
                    </label>
                    <label onChange={(e) => setGender(e.target.value)}>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        required
                      />
                      Female
                    </label>
                  </div>
                </div>
                <div className={style.right_side}>
                  <button className={style.update_btn}> Update</button>
                </div>
                {/* <div className={style.Next}>
              <button type="submit" className={style.next_btn}>
                Next
              </button>
            </div> */}
                {/* </div> */}
                {/* </form> */}
              </form>
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Settings;
