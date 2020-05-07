import React from 'react';
import soundfile from './test.mp3';
// const soundfile = require('./test.mp3');

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { track } = this.props;
        return(
            <audio controls>
                {/* <source src="https://prescloud-seeds.s3-us-west-1.amazonaws.com/Spongebob+Theme+Song+(WithLyrics).mp3" type="audio/mpeg"/> */}
                <source src={soundfile} type="audio/mpeg"/>
            </audio>
        )
    }
}

export default TrackIndexItem;