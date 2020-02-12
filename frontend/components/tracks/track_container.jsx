import { connect } from "react-redux";
import { fetchTracks } from "../../actions/track_actions"
import TrackIndex from "./track_index";

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.entities.tracks)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: (track) => dispatch(fetchTracks(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
