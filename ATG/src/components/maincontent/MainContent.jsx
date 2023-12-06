import React from "react";
import "./MainContent.css"
import Post from "../posts/Post";

const MainContent = () => {
    return (
        <>
            <div className="main-content-body">
                <div className="main-content-container">
                    <div className="content-heading">
                        <div className="content-heading-lists d-none d-lg-flex ">
                            <span>All Posts(32)</span>
                            <span>Article</span>
                            <span>Event</span>
                            <span>Education</span>
                            <span>Job</span>
                        </div>
                        <div className="content-heading-lists d-lg-none">
                            <span >All Posts(32)</span>
                        </div>
                        <div className="content-heading-buttons d-none d-lg-flex">
                            <div className="button btn-1">
                                <button>write a Post</button>
                                <img src="/down-arrow.svg" alt="" />
                            </div>
                            <div className="button btn-2">
                                <img src="/group-icon.svg" alt="" />
                                <button>Join Group</button>
                            </div>
                        </div>
                        <div className="button btn-1 d-lg-none">
                            <button>Filter: All</button>
                            <img src="/down-arrow.svg" alt="" />
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="content-left-container">
                            <Post />
                        </div>
                        <div className="content-right-container ">
                            <div className="content-right-container-top d-none d-lg-flex">
                                <div className="location">
                                    <img src="/location-icon.svg" alt="" />
                                    <span>Noida, India</span>
                                </div>
                                <img src="/pencil-icon.svg" alt="" />
                            </div>
                            <div className="content-right-container-para d-none d-lg-flex">
                                <img src="/error-icon.svg" alt="" />
                                <p>
                                    Your location will help us serve better and extend a personalised experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent;