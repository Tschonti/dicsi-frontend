import React from 'react'
import { connect }  from 'react-redux'
import _ from 'lodash'

import '../../styles.css'
import MyLoader from '../MyLoader'
import SearchBar from '../SearchBar'
import { fetchSongs, removeAlert, searchSongs, findId } from '../../actions'
import history from '../../history'

class SongList extends React.Component {
    state = {
        loaded: false
    }
    componentDidMount() {
        this.props.removeAlert()
        this.props.fetchSongs()
    }
    render() {
        if (_.isEmpty(this.props.songs) && !this.state.loaded) {
            return (
                <MyLoader />
            )
        }
        if (!this.state.loaded) {
            this.setState({loaded: true})
        }
        const songs = this.props.songs.map(song => (
            <div className="item pointer" key={song.id} onClick={() => history.push(`/songs/${song.id}`)}>
                <div className="content">
                    <h3 className="header">{song.id}. {song.title}</h3>
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

export default connect(mapStateToProps, { fetchSongs, removeAlert, searchSongs, findId })(SongList)