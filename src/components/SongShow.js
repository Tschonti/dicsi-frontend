import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSong } from '../actions'

class SongShow extends React.Component {
    state = {
        fontSize: 14
    }

    onSizeChange = (increase) => {
        if (increase && this.state.fontSize < 70) {
            this.setState({fontSize: this.state.fontSize + 3})
        } else if (!increase && this.state.fontSize > 8) {
            this.setState({fontSize: this.state.fontSize - 3})
        }
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id)
    }

    render() {
        if (this.props.song) {
            const verses = this.props.song.verses.map((verse, idx) =>{
                const lines = verse.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)
                return <p style={{fontSize: `${this.state.fontSize}px`}} key={idx}>{lines}</p>
            } )
            return (
                <div className="ui container">
                    <h2>{this.props.song.id}. {this.props.song.title}</h2>
                    <Link to={`/songs/edit/${this.props.match.params.id}`}>Dicsi szerkeztése</Link>
                    <button className="ui button primary" onClick={() => this.onSizeChange(false)}><i class="font icon"></i><i class="arrow down icon"></i></button>
                    <button className="ui button primary" onClick={() => this.onSizeChange(true)}><i class="font icon"></i><i class="arrow up icon"></i></button>
                    <button className="ui button primary" onClick={() => this.setState({ fontSize: 14 })}><i class="font icon"></i><i class="undo icon"></i></button>

                    {verses}
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