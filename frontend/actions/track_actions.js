import * as TrackUtil from '../util/track_api_util';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveAllTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
})

const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
})

const removeTrack = (trackId) => ({
    type: REMOVE_TRACK,
    trackId
})

export const fetchTracks = () => dispatch => (
    TrackUtil.fetchTracks()
        .then((tracks) => dispatch(receiveAllTracks(tracks)))
)

export const fetchTrack = (trackId) => dispatch => (
    TrackUtil.fetchTrack(trackId)
        .then((track) => dispatch(receiveTrack(track)))
)

export const uploadTrack = (track) => dispatch => (
    TrackUtil.uploadTrack(track)
        .then((track) => dispatch(receiveTrack(track)))
)

export const updateTrack = (track) => dispatch => (
    TrackUtil.updateTrack(track)
        .then((track) => dispatch(receiveTrack(track)))
)

export const deleteTrack = (trackId) => dispatch => (
    TrackUtil.deleteTrack(trackId)
        .then(() => dispatch(removeTrack(trackId)))
)