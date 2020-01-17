import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { updateTrack, uploadTrack, deleteTrack, fetchTracks } from './actions/track_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.updateTrack = updateTrack;
    window.uploadTrack = uploadTrack;
    window.deleteTrack = deleteTrack;
    window.fetchTracks = fetchTracks;
    window.store = store;
    window.getState = store.getState;
    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store}/>, root);
});