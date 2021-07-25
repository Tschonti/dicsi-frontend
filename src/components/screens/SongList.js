import React from 'react'
import { connect }  from 'react-redux'
import _ from 'lodash'
import MyTooltip from '../MyTooltip'
import { isMobileOnly } from 'react-device-detect'

import '../../styles.css'
import MyLoader from '../MyLoader'
import SearchBar from '../SearchBar'
import { fetchSongs, removeAlert, searchSongs, findId, addToPlaylist, removeFromPlaylist, playlistNext, stopPlaylist, cancelSearch, toggleVisibility } from '../../actions'
import history from '../../history'
import MyButton from '../MyButton'
import { sortSongs } from '../../util'

class SongList extends React.Component {
    state = {
        loaded: false,
        sortById: true,
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

    renderSmallButtons = song => {
        if (this.props.plVisible) {
            return (
                <div className="right-left">
                    <i data-tip="Hozzáadás a lejátszási listához" className="icon plus circle green" onClick={(e) => this.addToPlaylist(e, song.id)}></i>
                    <i data-tip="Eltávolítás a lejátszási listáról" className="icon minus circle red" onClick={(e) => this.removeFromPlaylist(e, song.id)}></i>
                </div>
            )
        }
    }

    render() {
        if (_.isEmpty(this.props.songs) && !this.state.loaded) {
            return (
                <MyLoader />
            )
        }
        const { searchList } = this.props
        if (!this.state.sortById) {
            sortSongs(this.props.songs, 'title')
        } else {
            sortSongs(this.props.songs, 'id')
        }
        const songs = this.props.songs.filter(song => searchList.list.includes(song.id) || !searchList.validSearch).map((song, idx) => (
            <div className={`column pointer hover-grey my-bottom-border ${idx % 3 !== 0 && !isMobileOnly ? 'left-border' : ''}`} key={song.id} onClick={() => history.push(`/dicsi/songs/${song.id}`)}>
                <div className="content right-left">
                    <h3 className="header my-header-text">{song.id}. {song.title}</h3>
                    {this.renderSmallButtons(song)}
                </div>
            </div>
        ))
        const empty = songs.length === 0 ? <p className="big-text centered-text">Nincs találat!</p> : null
        return (
            <div className="ui container">
                <MyTooltip />
                <div className="ui stackable grid">
                    <div className="twelve wide column">
                        <SearchBar id={this.props.findId} term={this.props.searchSongs} cancel={this.props.cancelSearch}/>
                    </div>
                    <div className="four wide column ">
                        <div className="centered-container">
                            <MyButton color="blue" onClick={() => this.setState({ sortById: true})} icons={["sort numeric down"]} tip="Dalok rendezése sorszám szerint" disabled={this.state.sortById}/>
                            <MyButton color="blue" onClick={() => this.setState({ sortById: false})} icons={["sort alphabet down"]} tip="Dalok rendezése cím szerint" disabled={!this.state.sortById}/>
                            <MyButton color="green" onClick={this.props.toggleVisibility} icons={["play circle"]} text=" Lejátszási lista"/>
                        </div>
                    </div>
                </div>
                <div className="ui stackable three column grid">
                    {songs}
                </div>
                {empty}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        songs: Object.values(state.songs),
        searchList: state.searchList,
        plVisible: state.playlist.visible
    }
}

export default connect(mapStateToProps, { fetchSongs, removeAlert, searchSongs, findId, addToPlaylist, removeFromPlaylist, playlistNext, stopPlaylist, cancelSearch, toggleVisibility })(SongList)