import React, { Fragment, useState } from "react";

// import components
import ChannelHeader from "../channelHeader";
import UpComingSession from "./UpComingSession";
import ReplaysAndClips from "./ReplaysAndClips";
import LearningJourney from "./LearningJourney";

// import styles
import s from "../../styles/agenda.module.css";

const OurAgenda = () => {
  const [showLearningJourney, setShowLearningJourney] = useState(false);
  const showJourneyBox = () => {
    setShowLearningJourney(true);
  };

  return (
    <Fragment>
      <div className={s.AgendaWrapper}>
        <ChannelHeader />
        <UpComingSession />
        {!showLearningJourney && (
          <ReplaysAndClips showJourneyBox={showJourneyBox} />
        )}
        {showLearningJourney && <LearningJourney />}
      </div>
    </Fragment>
  );
};

export default OurAgenda;
