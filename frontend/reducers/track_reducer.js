import { LOGOUT_CURRENT_USER } from '../actions/session_actions'
import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from "../actions/track_actions";

export default function trackReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
        return action.tracks;
    case RECEIVE_TRACK:
        let nextState = Object.assign({}, state, {[action.track.id]: action.track})
        return nextState;
    case REMOVE_TRACK:
        let nextState = Object.assign({}, state);
        delete nextState[action.trackId];
        return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
      
    default:
      return state;
  }
}