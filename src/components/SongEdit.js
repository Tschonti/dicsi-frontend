import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import { editSong, fetchSong } from '../actions'

class SongEdit extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id)
    }

    render() {
        if (!this.props.song) {
            return <div>Loading...</div>
        }
        const song = this.props.song
        return (
            <div className="ui container">
                Dicsi szerkesztése
                <SongForm
                    onSubmit={(formValues) => this.props.editSong(this.props.match.params.id, formValues)}
                    initialValues={{id: song.id, title: song.title, lyrics: song.verses.join('\n\n')}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { editSong, fetchSong })(SongEdit)