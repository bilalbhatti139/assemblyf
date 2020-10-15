import React, { Fragment } from "react";

// Import styles
import s from "../../../styles/profile.module.css";

const Experience = () => {
  return (
    <Fragment>
      <div className={s.ExperienceContainer}>
        <div className={s.header}>
          <p>Experience</p>
          <img
            src="../../../static/assets/images/edit.png"
            alt="edit-img"
            className="img-fluid"
          />
        </div>
        <div className={s.Content}>
          <div className={s.Title}>
            <div className={s.subTitle}>
              <h6>TechUkraine</h6>
            </div>
            <div className={s.years}>
              <p>
                May 2019 - Present <br /> <span>1 yr 5 mos</span>
              </p>
            </div>
          </div>
          <div className={s.text}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English...
              <span className={s.seeMore}>see More</span>
            </p>
          </div>
        </div>
        <hr />
        <div className={s.Content}>
          <div className={s.Title}>
            <div className={s.subTitle}>
              <h6>UETW Tech Tribe</h6>
            </div>
            <div className={s.years}>
              <p>
                May 2016 - Present <br /> <span>1 yr 5 mos</span>
              </p>
            </div>
          </div>
          <div className={s.text}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English...
              <span className={s.seeMore}>see More</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
