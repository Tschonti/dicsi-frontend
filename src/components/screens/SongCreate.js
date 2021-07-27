import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'

import { createSong } from '../../actions/songActions'
import { stopPlaylist, toggleVisibility,  } from '../../actions/playlistActions'

class SongCreate extends React.Component {
componentDidMount() {
    this.props.stopPlaylist()
    if (this.props.plVisible) {
        this.props.toggleVisibility()
    }
}

    render() {
        return (
            <div className="ui container">
                <h2 className="ui header">
                    Új ének felvétele
                </h2>
                <SongForm onSubmit={this.props.createSong}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { plVisible: state.playlist.visible }
}

export default connect(mapStateToProps, { createSong, stopPlaylist, toggleVisibility })(SongCreate)