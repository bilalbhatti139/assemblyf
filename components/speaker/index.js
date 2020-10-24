import React, { Fragment } from "react";

// import components
import ChannelHeader from "../channelHeader";

// import styles
import s from "../../styles/speakers.module.css";

// import static data
import { SpeakerData } from "../../utils/constants";

const Speaker = () => {
  return (
    <Fragment>
      <div className={s.SpeakerWrapper}>
        <ChannelHeader />
        <div className={s.SpeakerContainer}>
          <div className={s.title}>
            <p>They will teach you</p>
            <h1>Meet The Speakers</h1>
          </div>
          <div className={s.ourSpeakers}>
            {SpeakerData.map((item, index) => {
              return (
                <div className={s.speaker} key={index}>
                  <img
                    src={`../../static/assets/images/${item.image}`}
                    alt="speaker"
                    className="img-fluid"
                  />
                  <p>{item.name}</p>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Speaker;
