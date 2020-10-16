import React, { Fragment } from "react";

// import styles
import s from "../../styles/video.module.css";

const VideoContainer = () => {
  return (
    <Fragment>
      <div className={s.VideoSection}>
        <div className={s.MainVideoWrapper}>
          <div className={s.Video}>
            <img
              src="../../static/assets/images/video-placeholder.jpg"
              alt="img"
              className="img-fluid"
            />
          </div>
          <div className={s.MainVideoFourPerson}>
            <div className={s.Video}>
              <img
                src="../../static/assets/images/video-placeholder.jpg"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className={s.Video}>
              <img
                src="../../static/assets/images/video-placeholder.jpg"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className={s.Video}>
              <img
                src="../../static/assets/images/video-placeholder.jpg"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className={s.Video}>
              <img
                src="../../static/assets/images/video-placeholder.jpg"
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.videoMembersBottom}>
        <img
          src="../../static/assets/images/video-placeholder.jpg"
          alt="img"
          className="img-fluid"
          width="100"
        />
        <img
          src="../../static/assets/images/video-placeholder.jpg"
          alt="img"
          className="img-fluid"
          width="100"
        />
        <img
          src="../../static/assets/images/video-placeholder.jpg"
          alt="img"
          className="img-fluid"
          width="100"
        />
        <img
          src="../../static/assets/images/video-placeholder.jpg"
          alt="img"
          className="img-fluid"
          width="100"
        />
      </div>
    </Fragment>
  );
};

export default VideoContainer;
