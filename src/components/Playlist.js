import React from 'react'
import { connect }  from 'react-redux'
import ReactTooltip from 'react-tooltip'
import _ from 'lodash'

import { fetchSongs, playlistNext, startPlaylist } from '../actions'


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
            return (
                <div className={`item ${this.props.playlist.currentIndex === idx ? 'active' : ''}`} key={idx}>
                    <h5 className="header">{song.id}. {song.title}</h5>
                </div>
            )})
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
                <button disabled={!this.props.playlist.active} data-tip="Előző dal" className="ui button my-button purple" onClick={() => this.props.playlistNext(false, this.props.playlist)}><i className="icon backward"></i></button>
                <button disabled={this.props.playlist.active || this.props.playlist.list.length === 0} data-tip="Lejátszási lista indítása" className="ui button my-button green" onClick={() => this.props.startPlaylist(this.props.playlist)}><i className="play icon"></i></button>
                <button disabled={!this.props.playlist.active} data-tip="Következő dal" className="ui button my-button purple" onClick={() => this.props.playlistNext(true, this.props.playlist)}><i className="icon forward"></i></button>
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

export default connect(mapStateToProps, { fetchSongs, playlistNext, startPlaylist })(Playlist)