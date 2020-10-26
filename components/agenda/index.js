import React, { Fragment } from "react";

// import components
import ChannelHeader from "../channelHeader";

// import styles
import s from "../../styles/agenda.module.css";

const OurAgenda = () => {
  return (
    <Fragment>
      <div className={s.AgendaWrapper}>
        <ChannelHeader />
        <div className={s.title}>
          <h1>Upcoming Sessions</h1>
        </div>
        <div className={s.AgendaContainer}>
            <div className={s.UpcomingSessions}>

            </div>
            <div className={s.Session}>
                
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurAgenda;
