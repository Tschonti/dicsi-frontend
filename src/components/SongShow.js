import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSong } from '../actions'

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id)
    }

    render() {
        if (this.props.song) {
            const verses = this.props.song.verses.map((verse, idx) =>{
                const lines = verse.split('\n').map(line => <React.Fragment>{line}<br/></React.Fragment>)
                return <p key={idx}>{lines}</p>
            } )
            return (
                <div className="ui container">
                    <h2>{this.props.song.id}. {this.props.song.title}</h2>
                    {verses}
                    <Link to={`/songs/edit/${this.props.match.params.id}`}>Dicsi szerkeztése</Link>
                </div>
            )
        }
        return (<div>Loading...</div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        song: state.songs[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchSong })(SongShow)