import React from "react";
import NavLinkContainer from "./nav_link/nav_link_container";
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            <div className="header">
                <NavLinkContainer />
            </div>
        </header>
    </div>
);

export default App;