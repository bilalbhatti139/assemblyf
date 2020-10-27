import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

const ActivityBox = () => {
  return (
    <Fragment>
      <div className={s.ActivityBoxContainer}>
        <div className={s.header}>
          <div className={s.userDetailContainer}>
            <div className={s.userImg}>
              <img
                src="../../../static/assets/images/user.png"
                alt="user-img"
                className="img-fluid mr-2"
                width="40"
              />
            </div>
            <div className={s.userDetail}>
              <p>Bronze Leung</p>
              <span>
                1min{" "}
                <img
                  src="../../../static/assets/images/world.svg"
                  className="img-fluid"
                  width="10"
                />
              </span>
            </div>
          </div>
          <div className={s.menu}>
            <img
              src="../../../static/assets/images/menu-dots.png"
              className="img-fluid"
            />
          </div>
        </div>
        <div className={s.statusContainer}>
          <div className={s.Status}>
            <p>Many business men use Assembly F to grow online</p>
            <div className={s.statusImg}>
              <img
                src="../../../static/assets/images/status-image.png"
                className="img-fluid mt-2"
              />
            </div>
          </div>
        </div>
        <div className={s.LikeContainer}>
          <div className={s.likeImg}>
            <img
              src="../../../static/assets/images/like.png"
              className="img-fluid"
            />
          </div>
          <div className={s.CommentCount}>
            <span>1 Comment</span>
          </div>
        </div>
        <div className={s.Attachments}>
          <div className={s.Like}>
            <img
              src="../../../static/assets/images/like-grey.svg"
              className="mr-1 img-fluid"
              width="20"
            />
            <span>Like</span>
          </div>
          <div className={s.Comment}>
            <img
              src="../../../static/assets/images/comment.svg"
              className="mr-1 img-fluid"
              width="20"
            />{" "}
            <span>Comment</span>
          </div>
          <div className={s.Share}>
            <img
              src="../../../static/assets/images/share.svg"
              className="mr-1 img-fluid"
              width="20"
            />{" "}
            <span>Share</span>
          </div>
        </div>
        <div className={s.postComment}>
          <div className={s.userImg}>
            <img
              src="../../../static/assets/images/user.png"
              alt="user-img"
              className="img-fluid"
              width="40"
            />
          </div>
          <div className={s.statusBox}>
            <input type="text" placeholder="Add a comment" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ActivityBox;
