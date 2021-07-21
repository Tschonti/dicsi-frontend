import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSong } from '../actions'

const SongShow = props => {
    useEffect(() => {
        props.fetchSong(props.match.params.id)
    }, [])

    if (props.song) {
        console.log(props.song.verses[0])
        const verses = props.song.verses.map((verse, idx) =>{
            const lines = verse.split('\n').map(line => <React.Fragment>{line}<br/></React.Fragment>)
            return <p key={idx}>{lines}</p>
        } )
        return (
            <div className="ui container">
                <h2>{props.song.id}. {props.song.title}</h2>
                {verses}
            </div>
        )
    }
    return (<div>Loading...</div>)
}

const mapStateToProps = (state, ownProps) => {
    return {
        song: state.songs[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchSong })(SongShow)