import React from 'react'
import { connect }  from 'react-redux'
import _ from 'lodash'

import { fetchSongs } from '../actions/songActions'
import {
    playlistNext,
    startPlaylist,
    clearPlaylist,
    removeFromPlaylist,
    toggleVisibility,
    moveInPlaylist,
    savePlaylist,
    unloadPlaylist,
} from '../actions/playlistActions'

import MyButton from './MyButton'
import MyTooltip from './MyTooltip'
import MyModal from './MyModal'
import PlaylistItem from './PlaylistItem'
import PlaylistForm from './PlaylistForm'


class Playlist extends React.Component {
    state = {
        open: true,
    }

    componentDidMount() {
        this.props.fetchSongs()
    }

    renderSongList = (modifiable) => {
        if (_.isEmpty(this.props.songs) || !this.state.open) {
            return null
        }
        const list = this.props.playlist.list.map((songId, idx) => {
            const song = this.props.songs.find(el => el.id === songId)
            return song && <PlaylistItem key={idx} song={song} idx={idx} length={this.props.playlist.list.length} currentIndex={this.props.playlist.currentIndex} unmodifiable={!modifiable} />
        })

        const empty = list.length > 0 ? '' : (<p className="centered-text">A lejátszási lista üres</p>)
        return (
            <>
                <div className="ui relaxed divided ordered list">
                    {list}
                </div>
                {empty}
            </>
        )
    }
    onClear = () => {
        this.props.clearPlaylist()
        this.props.toggleVisibility()
    }

    onClose = (e) => {
        this.props.toggleVisibility()
        e.stopPropagation()
    }

    render() {
        //TODO dupla tool-tip
        if (!this.props.playlist.visible) {
            return null
        }
        const currentIndex = this.props.playlist.list.length === 0 ? 0 : this.props.playlist.currentIndex + 1
        const extraButtons = this.state.open ? (
            <div className="right-left pointer" onClick={() => this.setState({open: !this.state.open})}>
                <i className={`icon ${this.state.open ? 'minus' : 'plus'}`}></i>
                <i className="red icon close" onClick={this.onClose}></i>
            </div>
        ) : null
        const modifiable = !this.props.playlist.loaded || this.props.signedIn
        return (
            <>
                <div className="playlist-container">
                    <MyTooltip />
                    <div className="right-left pointer" onClick={() => this.setState({open: !this.state.open})}>
                        <h3>{this.props.playlist.loaded ? this.props.playlist.loadedName : 'Lejátszási lista'} {`${currentIndex}/${this.props.playlist.list.length}`}</h3>
                        <div>
                            <i className={`icon ${this.state.open ? 'minus' : 'plus'}`}></i>&nbsp;&nbsp;
                            <i className="red icon close" onClick={this.onClose}></i>
                        </div>
                    </div>
                    <div className="centered-container">
                        {this.props.signedIn && !this.props.playlist.loaded && (
                            <PlaylistForm onSubmit={(formData) => this.props.savePlaylist(formData)} disabled={this.props.playlist.list.length === 0} />
                        )}
                        {this.props.playlist.loaded && (
                            <MyButton tip="Üres listára váltás" color="blue" onClick={this.props.unloadPlaylist} icons={["eject"]} />
                        )}
                        {modifiable && (
                            <MyModal
                                header="Biztosan törlöd a lejátszási listát?"
                                generateTrigger={() => <MyButton disabled={this.props.playlist.list.length === 0} tip="Lejátszási lista törlése" color="negative" icons={["trash alternate"]} />}
                                closeText={'Mégse'}
                                approveText={'Törlés'}
                                onApprove={this.onClear}
                                negative
                            >
                                Biztosan törlöd a lejátszási listát? Ezt később nem tudod visszavonni!
                            </MyModal>
                        )}
                        <MyButton disabled={!this.props.playlist.active} tip="Előző ének" color="blue" onClick={() => this.props.playlistNext(false, this.props.playlist)} icons={["backward"]} />
                        <MyButton disabled={this.props.playlist.active || this.props.playlist.list.length === 0} tip="Lejátszási lista indítása" color="green" onClick={() => this.props.startPlaylist(this.props.playlist)} icons={["play"]} />
                        <MyButton disabled={!this.props.playlist.active} tip="Következő ének" color="blue" onClick={() => this.props.playlistNext(true, this.props.playlist)} icons={["forward"]} />
                    </div>
                    {this.renderSongList(modifiable)}
                    {extraButtons}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs),
        playlist: state.playlist,
        signedIn: state.auth.signedIn
    }
}

export default connect(mapStateToProps, {
    fetchSongs,
    playlistNext,
    startPlaylist,
    clearPlaylist,
    removeFromPlaylist,
    toggleVisibility,
    moveInPlaylist,
    savePlaylist,
    unloadPlaylist,
})(Playlist)