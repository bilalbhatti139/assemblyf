import React, { Fragment } from "react";

// import components
import ChannelHeader from "../channelHeader";

// import styles
import s from "../../styles/partners.module.css";

// import data
import { OurPartners } from "../../utils/constants";

const Speaker = () => {
  return (
    <Fragment>
      <div className={s.PartnersWrapper}>
        <ChannelHeader />
        <div className={s.partnerContainer}>
          <div className={s.title}>
            <h2>Partners & Sponsors</h2>
          </div>
          <div className={s.ourPartners}>
            {OurPartners.map((item, index) => {
              return (
                <div className={s.partner} key={index}>
                  <img
                    src={`../../static/assets/images/${item.image}`}
                    alt="speaker"
                    className="img-fluid"
                  />
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
