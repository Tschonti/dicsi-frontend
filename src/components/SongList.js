import React, { useEffect } from 'react'
import { connect }  from 'react-redux'

import { fetchSongs } from '../actions'

const SongList = (props) => {
    useEffect(() => {
        props.fetchSongs()
    }, [])
    const songs = props.songs.map(song => {
        const verses = song.verses.map((verse, idx) => <p key={idx}>{verse}</p>)
        return (
        <div key={song.id}>
            <h1>{song.id}. {song.title}</h1>
            {verses}
        </div>)
    })
    return <div>{songs}</div>
}

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs)
    }
}

export default connect(mapStateToProps, { fetchSongs })(SongList)