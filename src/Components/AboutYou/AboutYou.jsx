import React, { useState } from "react";
import style from "./AboutYou.module.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { updateSignUpInfo } from "../../redux/Slices/userSlice";

import { signup2 } from "../../utils/api";

const AboutYou = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bio, setBio] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

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

  const handleSignup = useMutation(signup2, {
    onSuccess: (data) => {
      dispatch(updateSignUpInfo({ bio, age, country, gender }));
      navigate("/");
    },
    onError: (error) => {
      console.log("Signup failed:", error);
      // Show error message to the user
      showErrorMsg(error);
    },
  });

  const formHandler = (e) => {
    e.preventDefault();
    handleSignup.mutate({ bio, age, country, gender });
  };

  return (
    <>
      <div className={style.about_you}>
        <button className={style.about}> About you </button>
      </div>
      <div className={style.innerrec}>
        <form className={style.Rec7} onSubmit={formHandler}>
          <div className={style.Bbio}>
            <label htmlFor="bi">Bio</label>

            <textarea
              className={style.Bio}
              type="text"
              placeholder="Not more than 100 Words"
              required
              maxLength={100}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            <div className={style.bb}>
              <div className={style.Country}>
                <label htmlFor="cnt">Country</label>

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
                <label htmlFor="age">Age</label>
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
                <input type="radio" name="gender" value="female" required />
                Female
              </label>
            </div>
            <div className={style.Next}>
              <button type="submit" className={style.next_btn}>
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutYou;
