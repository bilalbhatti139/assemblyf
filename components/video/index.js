import React, { Fragment } from "react";

// import styles
import s from "../../styles/video.module.css";

const VideoContainer = () => {
    return (
        <Fragment>
            <div className={s.MainWrapper}>
                <div className={s.VideoSection}>
                    <div className={s.MainVideoWrapper}>
                        <div className={s.Video}>
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid main_image"
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
                        <div className={s.FloatingImage}>
                            <img
                                src="../../static/assets/images/logo_white.png"
                                alt="header-logo"
                                className="img-fluid"
                                width="120"
                            />
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
                    <img
                        src="../../static/assets/images/video-placeholder.jpg"
                        alt="img"
                        className="img-fluid"
                        width="100"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default VideoContainer;
