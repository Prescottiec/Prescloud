import React from 'react';
const soundfile = require('./test.mp3')

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { track } = this.props;
        return(
            <audio controls>
                <source src="https://prescloud-seeds.s3-us-west-1.amazonaws.com/Spongebob+Theme+Song+(WithLyrics).mp3" type="audio/mpeg"/>
                {/* <source src='test.mp3' type="audio/mpeg"/> */}
            </audio>
        )
    }
}

export default TrackIndexItem;