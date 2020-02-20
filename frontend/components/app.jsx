import React from "react";
import NavLinkContainer from "./nav_link/nav_link_container";
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import TrackIndexContainer from '../components/tracks/track_container'
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
        <NavLinkContainer />
        <Modal />
        
        <Switch>
            <Route to="/tracks" component={TrackIndexContainer}/>
        </Switch>
    </div>
);

export default App;