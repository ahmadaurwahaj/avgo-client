import React from "react";
import style from "./EditBio.module.css";
import uicon from "../../assets/icons/usericon1.svg";

const EditBio = (props) => {
  const { textmsg } = props;
  return (
    <div className={style.msg_row}>
      <div className={style.msg_text}>
        <img className={style.background_icon} alt="bg_img" src={uicon} />
        
        <div>
                     
          <p className={style.para_text}>
            <p className={style.uname}>Casey</p>
            <p className={style.pra}>
              {textmsg}
             
            </p>
          
          </p>
         
        </div>
        {/* <div className={style.right_side} >
    <button className={style.edit_btn}> edit</button>
    </div> */}
      </div>
      <div className={style.right_editside} >
    <button className={style.edit_btn}> edit</button>
    </div>
    </div>
    
  );
};

export default EditBio;
