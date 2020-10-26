import React, { Fragment } from "react";

// import components
import ChannelHeader from "../channelHeader";
import UpComingSession from "./UpComingSession";
import ReplaysAndClips from "./ReplaysAndClips";

// import styles
import s from "../../styles/agenda.module.css";

const OurAgenda = () => {
  return (
    <Fragment>
      <div className={s.AgendaWrapper}>
        <ChannelHeader />
        <UpComingSession />
        <ReplaysAndClips />
      </div>
    </Fragment>
  );
};

export default OurAgenda;
