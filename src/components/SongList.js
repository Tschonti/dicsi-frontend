import React from 'react'
import { connect }  from 'react-redux'

import { fetchSongs, removeAlert } from '../actions'
import history from '../history'

class SongList extends React.Component {
    componentDidMount() {
        this.props.removeAlert()
        this.props.fetchSongs()
    }
    render() {
        const songs = this.props.songs.map(song => (
            <div className="item" key={song.id} onClick={() => history.push(`/songs/${song.id}`)} style={{cursor: 'pointer'}}>
                <div className="content">
                    <h3 className="header">{song.id}. {song.title}</h3>
                </div>
            </div>
        ))
        return (
            <div className="ui container">
                <div className="ui relaxed divided list">
                    {songs}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs)
    }
}

export default connect(mapStateToProps, { fetchSongs, removeAlert })(SongList)