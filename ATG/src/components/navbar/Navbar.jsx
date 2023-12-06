import React from "react";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="d-flex d-none d-lg-flex justify-content-around align-items-center navbar-height">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src="/logo.jpg" className="logo-img" alt="" />
                    </a>
                </div>
                <div>
                    <nav className="navbar navbar-light">
                        <div className="input-group search">
                            <span className="input-group-text search-input" id="basic-addon1">
                                <img src="/search-icon.svg" alt="" />
                            </span>
                            <input type="text" className="form-control search-input" placeholder="Search for your favorite groups in ATG" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </nav>
                </div>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <span>
                                Create account.
                            </span>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                It’s free!
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#createAccountModal">
                                        Create Account
                                    </button>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#logInModal">
                                        Log In
                                    </button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-lg-none">
                <button type="button" className="btn leave-btn">Join group</button>
            </div>
            <img src="/image1.png" className="navbar-img" alt="" />

            {/*  create account modal*/}
            <div class="modal fade " id="createAccountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-top-heading">
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                        </div>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
                            <p>Already have an account? <span>Sign In</span></p>
                        </div>
                        <div class="modal-body">
                            <div className="modal-body-left-container">
                                <div className="username">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <button className="create-btn">Create Account</button>
                                <button className="facebook-btn">
                                    <img src="/facebook-icon.png" alt="" />
                                    <span>Sign up with Facebook</span>
                                </button>
                                <button className="google-btn">
                                    <img src="/google-icon.png" alt="" />
                                    <span>Sign up with Google</span>
                                </button>
                                <p>Forgot Password?</p>
                            </div>
                            <div className="modal-body-right-container">
                                <img className="d-none d-lg-flex" src="/signup-image.png" alt="" />
                                <p className="d-none d-lg-flex">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default Navbar