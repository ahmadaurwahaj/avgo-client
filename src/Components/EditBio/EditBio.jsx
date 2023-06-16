import React, { useState } from "react";
import style from "./EditBio.module.css";
import uicon from "../../assets/icons/usericon1.svg";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { updateGeneralInfo } from "../../utils/api/updateUserApi";
import userSlice, { updateBio, updateName } from "../../redux/Slices/userSlice";
import { notifyError } from "../../Components/NotifyError";
import { notifySuccess } from "../../Components/NotifySuccess";
import { ToastContainer } from "react-toastify";

const EditBio = () => {
  const dispatch = useDispatch();
  const storeName = useSelector((state) => state?.user?.name);
  const storeBio = useSelector((state) => state?.user?.bio);
  const token = useSelector((state) => state?.auth?.token);
  const id = useSelector((state) => state?.user?.id);

  const [bio, setBio] = useState(storeBio);
  const [name, setName] = useState(storeName);
  const [editState, setEditState] = useState(false);

  const handleBio = useMutation(updateGeneralInfo, {
    onSuccess: (data) => {
      dispatch(updateBio(bio));
      notifySuccess("Bio data Updated");
    },
    onError: (error) => {
      notifyError(error.message);
    },
  });

  const bioFormHalder = (e) => {
    e.preventDefault();
    setEditState(false);
    dispatch(updateBio(bio));
    dispatch(updateName(name));
    let user_name = name;
    handleBio.mutate({ id, user_name, bio, token });
  };

  return (
    <div className={style.msg_row}>
      <div className={style.msg_text}>
        <img className={style.background_icon} alt="bg_img" src={uicon} />

        <div>
          <div className={style.para_text}>
            {editState ? (
              <>
                <textarea
                  className={style.Bio}
                  type="text"
                  placeholder="Name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            ) : (
              <p className={style.uname}>{storeName}</p>
            )}

            <div>
              {editState ? (
                <>
                  <textarea
                    className={style.Bio}
                    type="text"
                    placeholder="Not more than 100 Words"
                    required
                    maxLength={100}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </>
              ) : (
                <p className={style.pra}>{storeBio}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.right_editside}>
        <div>
          {!editState ? (
            <button
              className={style.edit_btn}
              onClick={() => {
                setEditState(true);
              }}
            >
              Edit
            </button>
          ) : (
            <button className={style.edit_btn} onClick={bioFormHalder}>
              Update
            </button>
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EditBio;
