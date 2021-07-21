import React, { useEffect } from 'react'
import { connect }  from 'react-redux'

import { fetchSongs } from '../actions'
import history from '../history'

const SongList = (props) => {
    useEffect(() => {
        props.fetchSongs()
    }, [])
    const songs = props.songs.map(song => (
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

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs)
    }
}

export default connect(mapStateToProps, { fetchSongs })(SongList)