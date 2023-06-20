import React, { useState } from "react";
// import style from "./Settings.module.css";
import style from "./Settings.module.css";
import SideBar from "../../Components/Sidebar/SideBar";
// import ShowMsg from "../../Components/ShowMsg/ShowMsg";
import EditBio from "../../Components/EditBio/EditBio";
import uicon from "../../assets/icons/usericon.svg";
import TopBar from "../../Components/Topbar/TopBar";

import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  updateGeneralInfo,
  updatePassword
} from "../../utils/api/updateUserApi";
import {
  clearUser,
  updateAge,
  updateCountry,
  updateGender
} from "../../redux/Slices/userSlice";

import { notifyError } from "../../Components/NotifyError";
import { ToastContainer } from "react-toastify";
import { notifySuccess } from "../../Components/NotifySuccess";

function Settings() {
  const dispatch = useDispatch();
  const token = useSelector(state => state?.auth?.token);
  const id = useSelector(state => state.user.id);
  const email = useSelector(state => state.user.email);
  const storeAge = useSelector(state => state.user.age);
  const storeGender = useSelector(state => state.user.gender);
  const storeCountry = useSelector(state => state.user.country);

  const [age, setAge] = useState(storeAge);
  const [country, setCountry] = useState(storeCountry);
  const [gender, setGender] = useState(storeGender);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditStateGeneralInfo, setIsEditStateGeneralInfo] = useState(false);

  const handleUpdatePassword = useMutation(updatePassword, {
    onSuccess: data => {
      notifySuccess("Password Updated");
    },
    onError: error => {
      notifyError(error.message);
    }
  });

  const handleGeneralInfo = useMutation(updateGeneralInfo, {
    onSuccess: data => {
      dispatch(updateCountry(country));
      dispatch(updateAge(age));
      dispatch(updateGender(gender));
      notifySuccess("General Info Updated");
    },
    onError: error => {
      notifyError(error.message);
    }
  });

  const passwordFormHandler = e => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      notifyError("New Passwords and Confirm Password do not match");
    } else {
      handleUpdatePassword.mutate({
        id,
        email,
        currentPassword,
        newPassword,
        token
      });
    }
  };

  const generalInfoFormHalder = e => {
    console.log("I'm called");
    e.preventDefault();
    setIsEditStateGeneralInfo(false);
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
              <button className={style.set_btn}> Settings</button>
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
                      <EditBio />
                    </div>
                  </div>
                </div>
              </div>

              {/* --------------------------------------- Password Starts --------------------------------------- */}

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
                      onChange={e => setCurrentPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className={style.container1}>
                    <input
                      className={style.input_small}
                      type="password"
                      placeholder="New Password"
                      // required
                      onChange={e => {
                        setNewPassword(e.target.value);
                      }}
                    ></input>
                    <input
                      className={style.input_small}
                      type="password"
                      placeholder="Confirm New Password"
                      // required
                      onChange={e => {
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
                  {isEditStateGeneralInfo ? (
                    <>
                      <div className={style.bb}>
                        <div className={style.Country}>
                          <select
                            className={style.country}
                            id="country"
                            required
                            onChange={e => setCountry(e.target.value)}
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
                            onChange={e => setAge(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className={style.Gender}>
                        <label className={style.gender_h} htmlFor="id">
                          Gender:
                        </label>
                        <label onChange={e => setGender(e.target.value)}>
                          <input type="radio" name="gender" value="male" />
                          Male
                        </label>
                        <label onChange={e => setGender(e.target.value)}>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            required
                          />
                          Female
                        </label>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={style.bb}>
                        <div className={style.Country}>
                          <select className={style.country} disabled>
                            <option>{storeCountry.toUpperCase()}</option>
                          </select>
                        </div>

                        <div className={style.Age}>
                          <input className={style.age} value={age} />
                        </div>
                      </div>

                      <div className={style.Gender}>
                        <label className={style.gender_h} htmlFor="id">
                          Gender:
                        </label>
                        <label>
                          <input
                            type="radio"
                            checked={storeGender === "male"}
                          />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            checked={storeGender === "female"}
                          />
                          Female
                        </label>
                      </div>
                    </>
                  )}
                </div>
                <div className={style.right_side}>
                  {isEditStateGeneralInfo ? (
                    <button type="submit" className={style.update_btn}>
                      Update
                    </button>
                  ) : (
                    <div
                      className={style.update_btn}
                      onClick={() => {
                        setIsEditStateGeneralInfo(true);
                      }}
                    >
                      Edit
                    </div>
                  )}
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
