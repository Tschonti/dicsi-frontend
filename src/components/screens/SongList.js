import React from 'react'
import { connect }  from 'react-redux'
import _ from 'lodash'

import '../../styles.css'
import MyLoader from '../MyLoader'
import SearchBar from '../SearchBar'
import { fetchSongs, removeAlert, searchSongs, findId, addToPlaylist, removeFromPlaylist, playlistNext, stopPlaylist } from '../../actions'
import history from '../../history'

class SongList extends React.Component {
    state = {
        loaded: false
    }
    componentDidMount() {
        this.props.removeAlert()
        this.props.fetchSongs()
        this.props.stopPlaylist()
    }

    componentDidUpdate() {
        if (!this.state.loaded && !_.isEmpty(this.props.songs)) {
            this.setState({ loaded: true})
        }
    }

    addToPlaylist = (event, id) => {
        this.props.addToPlaylist(id)
        event.stopPropagation()
    }
    removeFromPlaylist = (event, id) => {
        this.props.removeFromPlaylist(id)
        event.stopPropagation()
    }

    render() {
        if (_.isEmpty(this.props.songs) && !this.state.loaded) {
            return (
                <MyLoader />
            )
        }
        const songs = this.props.songs.map(song => (
            <div className="item pointer" key={song.id} onClick={() => history.push(`/dicsi/songs/${song.id}`)}>
                <div className="content">
                    <h3 className="header">{song.id}. {song.title}</h3>
                    <i className="icon plus circle green" onClick={(e) => this.addToPlaylist(e, song.id)}></i>
                    <i className="icon minus circle red" onClick={(e) => this.removeFromPlaylist(e, song.id)}></i>
                </div>
            </div>
        ))
        const empty = songs.length === 0 ? <p className="big-text centered-text">Nincs találat!</p> : null
        return (
            <div className="ui container">

                <SearchBar label="Sorszám" id={this.props.findId} term={this.props.searchSongs} fetchAll={this.props.fetchSongs}/>
                <div className="ui relaxed divided list">
                    {songs}
                </div>
                {empty}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs)
    }
}

export default connect(mapStateToProps, { fetchSongs, removeAlert, searchSongs, findId, addToPlaylist, removeFromPlaylist, playlistNext, stopPlaylist })(SongList)