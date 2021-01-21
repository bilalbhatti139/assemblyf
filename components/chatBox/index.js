import React, { Fragment } from "react";
import { GithubPicker } from "react-color";
import s from "../../styles/video.module.css";

const ChatBox = () => {
    return (
        <Fragment>
            <div className={s.VideoSidebarContiner}>
                <div className={s.VideoSidebarInnerContiner}>
                    <div className={s.AddLogo}>
                        <h4>Add logo</h4>
                        <button type="button">+</button>
                    </div>
                    <div className={s.ChooseBackground}>
                        <h4>Choose Background</h4>
                        <GithubPicker
                            triangle="hide"
                            width="100%"
                            className={s.GithubPicker}
                        />
                    </div>
                    <div className={s.VideoFilter}>
                        <h4>Video filter</h4>
                        <div className={s.Filters}>
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid"
                            />
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid"
                            />
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid"
                            />
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid"
                            />
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid"
                            />
                            <img
                                src="../../static/assets/images/video-placeholder.jpg"
                                alt="img"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className={s.AddLogo}>
                        <h4>Add Cover Image</h4>
                        <button type="button">+</button>
                    </div>
                    <div className={s.AddLogo}>
                        <h4>Text</h4>
                        <input type="text"/>
                    </div>
                    <div className={s.AddLogo}>
                        <h4>Text Style</h4>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ChatBox;
