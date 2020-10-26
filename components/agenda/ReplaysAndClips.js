import React, { Fragment } from "react";

// import styles
import s from "../../styles/agenda.module.css";

// import constants
import { ReplayAndClips } from "../../utils/constants";

const ReplaysAndClips = () => {
  return (
    <Fragment>
      <div className={s.title}>
        <h2>Replays & Clips</h2>
      </div>
      <div className={s.VideosContainer}>
        {ReplayAndClips.map((item, index) => {
          return (
            <div className={s.VideoImage} key={index}>
              <img
                src={`../../static/assets/images/${item.image}`}
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ReplaysAndClips;
