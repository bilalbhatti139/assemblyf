import React, { Fragment } from "react";

// import styles
import s from "../../styles/agenda.module.css";

// import constants
import { LearningJourneyList } from "../../utils/constants";

const LearningJourney = () => {
  return (
    <Fragment>
      <div className={s.AgendaContentWrapper}>
        <div className={s.title}>
          <h2>Learning Journey</h2>
        </div>
        <div className={s.AgendaContainer}>
          <div className={s.UpcomingSessions}>
            {LearningJourneyList.map((item, index) => {
              return (
                <div className={s.Session} key={index}>
                  <span>{item.title}</span>
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

export default LearningJourney;
