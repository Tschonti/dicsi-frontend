import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import { createSong, stopPlaylist } from '../../actions'

class SongCreate extends React.Component {
componentDidMount() {
    this.props.stopPlaylist()
}

    render() {
        return (
            <div className="ui container">
                <h2 className="ui header">
                    Új dal felvétele
                </h2>
                <SongForm onSubmit={this.props.createSong}/>
            </div>
        )
    }
}

export default connect(null, { createSong, stopPlaylist })(SongCreate)