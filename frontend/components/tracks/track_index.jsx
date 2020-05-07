import React from 'react';
import TrackIndexItem from './track_index_item'

class TrackIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        const { tracks } = this.props;
        if (!this.props.tracks[0]) this.props.tracks[0] = '';
        return(
            <div>
                <div>
                    {
                        tracks.map(track => (
                            <TrackIndexItem
                            track={track}
                            key={`${track.id}`}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default TrackIndex;