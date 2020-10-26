import React, { Fragment } from "react";

// Import components
import PostBox from "./postbox";
import ActivityBox from "./activityBox";

// Import styles
import s from "../../styles/profile.module.css";

const CommunityBox = () => {
  return (
    <Fragment>
      <div className={s.ProfileContainer}>
        <div className={s.ContentLeftWrap}>
          <PostBox />
        </div>
        <div className={s.ContentRightWrap}>
          <ActivityBox />
        </div>
      </div>
    </Fragment>
  );
};

export default CommunityBox;
