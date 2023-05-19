import React from "react";
import style from "./AboutYou.module.css";
import { useNavigate } from "react-router-dom";
const AboutYou = () => {
  const navigate = useNavigate();
  const formHandler = (e, values) => {
    e.preventDefault();
    navigate("/");
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
            />

            <div className={style.bb}>
              <div className={style.Country}>
                <label htmlFor="cnt">Country</label>

                <select className={style.country} id="country" required>
                  <option value="volvo">Country</option>
                  <option value="volvo">Pakistan</option>
                  <option value="saab">America</option>
                  <option value="mercedes">Mexico</option>
                  <option value="audi">France</option>
                </select>
              </div>

              <div className={style.Age}>
                <label htmlFor="age">Age</label>
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
