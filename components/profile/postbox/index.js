import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

const PostBox = () => {
  return (
    <Fragment>
      <div className={s.PostBoxContainer}>
        <div className={s.postText}>
          <div className={s.userImg}>
            <img
              src="../../../static/assets/images/user.png"
              alt="user-img"
              className="img-fluid"
              width="40"
            />
          </div>
          <div className={s.statusBox}>
            <input type="text" placeholder="What's on your mind, Bilal" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostBox;
