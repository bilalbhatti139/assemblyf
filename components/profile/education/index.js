import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

const Education = () => {
  return (
    <Fragment>
      <div className={s.ExperienceContainer}>
        <div className={s.header}>
          <p>Education</p>
          <img
            src="../../../static/assets/images/edit.png"
            alt="edit-img"
            className="img-fluid"
          />
        </div>
        <div className={s.Content}>
          <div className={s.Title}>
            <div className={s.subTitle}>
              <h6>Sumy State University</h6>
            </div>
            <div className={s.years}>
              <p>2003 - 2008</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
