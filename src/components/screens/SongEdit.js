import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import Modal from './../Modal'

import { editSong, fetchSong, deleteSong } from '../../actions/songActions'
import { stopPlaylist, toggleVisibility } from '../../actions/playlistActions'

class SongEdit extends React.Component {
    state = {
        deleteModalActive: false,
    }

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
        const actions = () => (
            <>
                <button className="ui button" onClick={()=> this.setState({deleteModalActive: false})}>Mégse</button>
                <button className="ui negative button" onClick={() => this.props.deleteSong(this.props.match.params.id, this.state.deletePassword)}>Törlés</button>
            </>
        )
        const modal = this.state.deleteModalActive ? <Modal
                header="Biztosan törlöd ezt az éneket?"
                content={`Biztosan törlöd a(z) ${this.props.song.title} éneket? Ezt később nem tudod visszavonni!`}
                actions={actions()}
                onDismissed={()=> this.setState({deleteModalActive: false})}
            /> : null
        const song = this.props.song
        return (
            <div className="ui container">
                <h2 className="ui header">
                    Ének szerkesztése
                </h2>
                <SongForm
                    onSubmit={(formValues) => this.props.editSong(this.props.match.params.id, formValues)}
                    initialValues={{id: song.id, title: song.title, lyrics: song.verses.join('\n\n')}}
                    edit id={song.id} onDeleteClick={() => this.setState({deleteModalActive: true})}
                >
                    {modal}
                </SongForm>
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