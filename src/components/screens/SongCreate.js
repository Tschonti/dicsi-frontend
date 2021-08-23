import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import MyLoader from '../MyLoader'

import { createSong, fetchSongs } from '../../actions/songActions'
import { stopPlaylist, toggleVisibility,  } from '../../actions/playlistActions'

class SongCreate extends React.Component {
componentDidMount() {
    this.props.fetchSongs()
    this.props.stopPlaylist()
    if (this.props.plVisible) {
        this.props.toggleVisibility()
    }
}

    render() {
        if (this.props.biggestID > 0) {
            return (
                <div className="ui container">
                    <h2 className="ui header">
                        Új ének felvétele
                    </h2>
                    <SongForm onSubmit={this.props.createSong} initialValues={{ id: this.props.biggestID + 1}}/>
                </div>
            )
        } else {
            return <MyLoader />
        }
    }
}

const mapStateToProps = state => {
    return {
        plVisible: state.playlist.visible,
        biggestID: Math.max(...Object.values(state.songs).map(song => song.id))
    }
}

export default connect(mapStateToProps, { createSong, stopPlaylist, toggleVisibility, fetchSongs })(SongCreate)