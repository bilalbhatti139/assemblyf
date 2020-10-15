import React, { Fragment } from "react";

// Import components
import ProfilePhoto from "./profilePhoto";
import Experience from "./experience";
import Education from "./education";
import Followers from "./yourFollowers";
import PostBox from "./postbox";
import ActivityBox from "./activityBox";

// Import styles
import s from "../../styles/profile.module.css";

const Profile = () => {
  return (
    <Fragment>
      <div className={s.ProfileContainer}>
        <div className={s.ContentLeftWrap}>
          <ProfilePhoto />
          <Experience />
          <Education />
          <Followers />
        </div>
        <div className={s.ContentRightWrap}>
          <PostBox />
          <ActivityBox />
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
