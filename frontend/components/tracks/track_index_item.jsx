import React from 'react';

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { track } = this.props;
        return(
            <div>
                <h1>{track.title}</h1>
            </div>
        )
    }
}

export default TrackIndexItem;