import React, { Fragment } from "react";

// import styles
import s from "../../styles/channelHeader.module.css";

const ChannelHeader = () => {
  return (
    <Fragment>
      <div className={s.channelHeaderContainer}>
        <div className={s.uploadImage}>
          <label for="file-input">
            <img src="../../static/assets/images/edit.svg" width="20" />
          </label>
          <input id="file-input" type="file" />
        </div>
        <div className={s.channelName}>
          <h1>Javascript Academy</h1>
        </div>
        <div className={s.channelJoin}>
          <span>484 Members</span>
          <button> Join</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ChannelHeader;
