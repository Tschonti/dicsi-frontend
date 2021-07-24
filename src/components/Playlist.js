import React from 'react'
import { connect }  from 'react-redux'
import ReactTooltip from 'react-tooltip'
import _ from 'lodash'

import { fetchSongs, playlistNext, startPlaylist, clearPlaylist } from '../actions'
import MyButton from './MyButton'


class Playlist extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }
    renderSongList = () => {
        if (_.isEmpty(this.props.songs)) {
            return null
        }
        const list = this.props.playlist.list.map((songId, idx) => {
            const song = this.props.songs.find(el => el.id === songId)
            return  song ? (
                <div className={`item ${this.props.playlist.currentIndex === idx ? 'active' : ''}`} key={idx}>
                    <h5 className="header">{song.id}. {song.title}</h5>
                </div>
            ) : null})
        return (
            <div className="ui relaxed divided ordered">
                {list}
            </div>
        )

    }

    render() {
        return (
            <div>
                <ReactTooltip effect="solid"/>
                Lejátszási lista
                <MyButton disabled={!this.props.playlist.active} tip="Előző dal" color="purple" onClick={() => this.props.playlistNext(false, this.props.playlist)} icons={["backward"]} />
                <MyButton disabled={this.props.playlist.active || this.props.playlist.list.length === 0} tip="Lejátszási lista indítása" color="green" onClick={() => this.props.startPlaylist(this.props.playlist)} icons={["play"]} />
                <MyButton disabled={!this.props.playlist.active} tip="Következő dal" color="purple" onClick={() => this.props.playlistNext(true, this.props.playlist)} icons={["forward"]} />
                <MyButton disabled={this.props.playlist.list.length === 0} tip="Lejátszási lista törlése" color="negative" onClick={() => this.props.clearPlaylist()} icons={["trash alternate"]} />
                {this.renderSongList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs),
        playlist: state.playlist
    }
}

export default connect(mapStateToProps, { fetchSongs, playlistNext, startPlaylist, clearPlaylist })(Playlist)