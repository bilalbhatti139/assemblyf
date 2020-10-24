import React, { Fragment } from "react";

// import styles
import s from "../../styles/channelHeader.module.css";

const ChannelHeader = () => {
  return (
    <Fragment>
      <div className={s.channelHeaderContainer}>
        <div className={s.channelLogo}>
          <img
            src="../../static/assets/images/logo.png"
            className="img-fluid"
            width="150"
          />
        </div>
        <div className={s.channelName}>
          <h1>Channel Name</h1>
        </div>
        <div className={s.channelJoin}>
          <p>
            <img
              src="../../static/assets/images/members.svg"
              className="img-fluid mr-2"
              width="30"
            />
            484 Members
          </p>
          <button>Join Us</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ChannelHeader;
