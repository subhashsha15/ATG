import react from "react"
import "./Post.css"

const Post = () => {
    return (
        <>
            <div className="card mb-3">
                <img src="/post-image1.png" className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">✍️ Article</h5>
                    <div className="para">
                        <p className="card-text">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                        <img src="/dot-icon.svg" alt="" />
                    </div>
                    <p className="card-text para-2">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className="profile-details">
                        <div className="profile-image">
                            <img src="/profile-image1.png" alt="" />
                            <span>Sarthak Kamra</span>
                        </div>
                        <div className="profile-views">
                            <span className="views">
                                <img src="/view-icon.svg" alt="" />
                                <span>1.4k views</span>
                            </span>
                            <span className="share-btn">
                                <img src="share-icon.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <img src="/post-image2.png" className="card-img-top" alt="..." />
                <div className="card-body w-100">
                    <h5 className="card-title">🔬️ Education</h5>
                    <div className="para">
                        <p className="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                        <img src="/dot-icon.svg" alt="" />
                    </div>
                    <p className="card-text para-2">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className="profile-details">
                        <div className="profile-image">
                            <img src="/profile-image2.png" alt="" />
                            <span>Sarah West</span>
                        </div>
                        <div className="profile-views">
                            <span className="views">
                                <img src="/view-icon.svg" alt="" />
                                <span>1.4k views</span>
                            </span>
                            <span className="share-btn">
                                <img src="share-icon.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <img src="/post-image3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">🗓️ Meetup</h5>
                    <div className="para">
                        <p className="card-text">Finance & Investment Elite Social Mixer @Lujiazui</p>
                        <img src="/dot-icon.svg" alt="" />
                    </div>
                    <div className="meeting-details">
                        <div className="meeting-time">
                            <img src="/calender-icon.svg" alt="" />
                            <span>Fri, 12 Oct, 2018</span>
                        </div>
                        <div className="meeting-location">
                            <img src="/location-icon.svg" alt="" />
                            <span>Ahmedabad, India</span>
                        </div>
                    </div>
                    <button>
                        Visit Website
                    </button>
                    <div className="profile-details">
                        <div className="profile-image">
                            <img src="/profile-image3.png" alt="" />
                            <span>Ronal Jones</span>
                        </div>
                        <div className="profile-views">
                            <span className="views">
                                <img src="/view-icon.svg" alt="" />
                                <span>1.4k views</span>
                            </span>
                            <span className="share-btn">
                                <img src="share-icon.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">💼️ Job</h5>
                    <div className="para">
                        <p className="card-text">Software Developer</p>
                        <img src="/dot-icon.svg" alt="" />
                    </div>
                    <div className="meeting-details">
                        <div className="meeting-time">
                            <img src="/meeting-place-icon.svg" alt="" />
                            <span>Innovaccer Analytics Private Ltd.</span>
                        </div>
                        <div className="meeting-location">
                            <img src="/location-icon.svg" alt="" />
                            <span>Noida, India</span>
                        </div>
                    </div>
                    <button className="lastpost-btn">
                        Apply on Timesjobs
                    </button>
                    <div className="profile-details">
                        <div className="profile-image">
                            <img src="/profile-image4.png" alt="" />
                            <span>Joseph Gray</span>
                        </div>
                        <div className="profile-views">
                            <span className="views">
                                <img src="/view-icon.svg" alt="" />
                                <span>1.4k views</span>
                            </span>
                            <span className="share-btn">
                                <img src="share-icon.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;