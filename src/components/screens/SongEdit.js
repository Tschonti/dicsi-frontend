import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import { editSong, fetchSong, stopPlaylist, toggleVisibility } from '../../actions'

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
            return <div>Loading...</div>
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
                    edit
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

export default connect(mapStateToProps, { editSong, fetchSong, stopPlaylist, toggleVisibility })(SongEdit)