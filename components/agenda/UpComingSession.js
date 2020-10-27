import React, { Fragment } from "react";

// import styles
import s from "../../styles/agenda.module.css";

// import constants
import { UpComingSessions } from "../../utils/constants";

const UpComingSession = () => {
  return (
    <Fragment>
      <div className={s.AgendaContentWrapper}>
        <div className={s.title}>
          <h2>Upcoming Sessions</h2>
        </div>
        <div className={s.AgendaContainer}>
          <div className={s.UpcomingSessions}>
            {UpComingSessions.map((item, index) => {
              return (
                <div className={s.Session} key={index}>
                  <p>{item.session}</p>
                  <span>{item.time}</span>
                </div>
              );
            })}
          </div>
          <div className={s.SessionContent}>
            <img
              src="../../static/assets/images/thumbnail.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpComingSession;
