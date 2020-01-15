import React from 'react';

const NavLink = ({ currentUser, logout, openModal, clearErrors }) => {
    const errorsClear = (action) => {
        clearErrors();
        openModal(action);
    }

    const sessionLinks = () => (
        <div className="splash-page">
            <nav className="nav-bar">
                <div className="left-side-nav">
                    <div className="prescloud-logo"></div>
                    <h1 className="prescloud-text">PRESCLOUD</h1>
                </div>

                <div className="user-auth">
                    <button className="login-button" onClick={() => errorsClear('login')}>Sign in</button>
                    <button className="signup-button" onClick={() => errorsClear('signup')}>Create account</button>
                </div>
            </nav>
            <div className="hero-image">
                <div className="hero-img-text">
                    <h1 className="hero-img-text-1">Discover more with PresCloud Go+</h1>
                    <h2 className="hero-img-text-2">PresCloud Go+ lets you listen offline, ad-free, with over 10 tracks — and growing.</h2>
                </div>
            </div>
        </div>
    );


    const personalNavLink = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? personalNavLink() : sessionLinks();
};


export default NavLink;