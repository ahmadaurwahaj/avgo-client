import React from "react";
import style from "./AboutYou.module.css";

const AboutYou = () => {
  return (
    <>
      <div className={style.about_you}>
        <button className={style.about}> About you </button>
      </div>
      <div className={style.innerrec}>
        <div className={style.Rec7}>
          <div className={style.Bbio}>
            <label htmlFor="bi">Bio</label>

            <textarea
              className={style.Bio}
              type="text"
              placeholder="Not more than 100 Words"
            />

            <div className={style.bb}>
              <div className={style.Country}>
                <label htmlFor="cnt">Country</label>

                <select className={style.country} id="country">
                  <option value="volvo">Country</option>
                  <option value="volvo">Pakistan</option>
                  <option value="saab">America</option>
                  <option value="mercedes">Mexico</option>
                  <option value="audi">France</option>
                </select>
              </div>

              <div className={style.Age}>
                <label htmlFor="age">Age</label>
                <input className={style.age} type="number" placeholder="Age" />
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
                <input type="radio" name="gender" value="female" />
                Female
              </label>
            </div>
            <div className={style.Next}>
              <button className={style.next_btn}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutYou;
