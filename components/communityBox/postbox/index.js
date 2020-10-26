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
        <div className={s.Attachments}>
          <div className={s.Links}>
            <img
              src="../../../static/assets/images/pin.png"
              className="mr-1 img-fluid"
              width="20"
            />
            <span>Links</span>
          </div>
          <div className={s.photoAndVideo}>
            <img
              src="../../../static/assets/images/photos.png"
              className="mr-1 img-fluid"
              width="20"
            />{" "}
            <span>Photo/Vide</span>
          </div>
          <div className={s.feelingAndReaction}>
            <img
              src="../../../static/assets/images/smile.png"
              className="mr-1 img-fluid"
              width="20"
            />{" "}
            <span>Feeling/Reaction</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PostBox;
