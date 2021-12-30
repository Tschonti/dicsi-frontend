import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'

import { editSong, fetchSong, deleteSong } from '../../actions/songActions'
import { stopPlaylist, toggleVisibility } from '../../actions/playlistActions'
import MyLoader from '../MyLoader'

class SongEdit extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id)
        this.props.stopPlaylist()
        if (this.props.plVisible) {
            this.props.toggleVisibility()
        }
    }

    render() {
        if (!this.props.song) {
            return <MyLoader />
        }
        const song = this.props.song
        return (
            <div className="ui container">
                <h2 className="ui header">
                    Ének szerkesztése
                </h2>
                <SongForm
                    onSubmit={(formValues) => this.props.editSong(this.props.match.params.id, formValues)}
                    initialValues={{id: song.id, title: song.title, lyrics: song.verses.join('\n\n')}}
                    edit id={song.id} onDeleteClick={() => this.props.deleteSong(this.props.match.params.id)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        song: state.songs[ownProps.match.params.id],
        plVisible: state.playlist.visible
    }
}

export default connect(mapStateToProps, { editSong, fetchSong, stopPlaylist, toggleVisibility, deleteSong })(SongEdit)