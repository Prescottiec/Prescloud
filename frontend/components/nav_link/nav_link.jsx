import React from 'react';

const NavLink = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="login-button" onClick={() => openModal('login')}>Sign in</button>
            &nbsp;or&nbsp;
            <button className="signup-button" onClick={() => openModal('signup')}>Create account</button>
        </nav>
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