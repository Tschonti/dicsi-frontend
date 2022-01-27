import React from 'react'
import { connect } from 'react-redux'
import { Accordion, Icon } from 'semantic-ui-react'
import _ from 'lodash'

import { fetchSongs } from '../../actions/songActions'
import { fetchPlaylists, loadPlaylist } from '../../actions/playlistActions'
import MyLoader from '../MyLoader'
import MyTooltip from '../MyTooltip'
import PlaylistItem from '../PlaylistItem'
import MyButton from '../MyButton'

class PlaylistList extends React.Component {
    state = {
        activePlaylist: -1,
    }

    componentDidMount() {
        this.props.fetchSongs()
        this.props.fetchPlaylists()
    }

    handleClick(idx) {
        this.setState({ activePlaylist: this.state.activePlaylist === idx ? -1 : idx })
    }

    render() {
        if (this.props.playlistList.length > 0 && !_.isEmpty(this.props.songs)) {
            return (
                <div className="ui container">
                    <MyTooltip />
                    <h2>Lejátszási listák</h2>
                    <Accordion fluid styled>
                        {this.props.playlistList.map(playlist => (
                            <div key={playlist.id}>
                                <Accordion.Title
                                    active={this.state.activePlaylist === playlist.id}
                                    onClick={() => this.handleClick(playlist.id)}
                                >
                                    <div className='right-left'>
                                        <h3>
                                            <Icon name='dropdown' />
                                            {playlist.name}
                                        </h3>
                                        <div className='next-to'>
                                            <p>Létrehozva: {new Date(Date.parse(playlist.created_at)).toLocaleDateString('hu-HU')}</p>
                                        </div>
                                    </div>
                                </Accordion.Title>
                                <Accordion.Content active={this.state.activePlaylist === playlist.id}>
                                    <MyButton tip="Betöltés" color="green" onClick={() => this.props.loadPlaylist(playlist.id, true)} icons={["play circle"]} />
                                        <MyButton tip="Megosztás" color="purple" onClick={() => navigator.clipboard.writeText(`https://okgy.hu/dicsi/playlist/${playlist.id}`)} icons={["share alternate"]} />
                                        <MyButton tip="Duplikálás" color="blue" onClick={() => this.props.loadPlaylist(playlist.id, false)} icons={["copy"]} />
                                        {this.props.signedIn && (
                                            <MyButton tip="Törlés" color="red" onClick={() => this.props.loadPlaylist(playlist.id)} icons={["trash alternate"]} />
                                        )}
                                    <div className="ui relaxed divided ordered list">
                                        {playlist.songs.map((songId, idx) => (
                                            <PlaylistItem key={idx} song={this.props.songs[songId]} idx={idx} length={playlist.songs.length} unmodifiable={!this.props.signedIn} />
                                        ))}
                                    </div>
                                </Accordion.Content>
                            </div>
                        ))}
                    </Accordion>
                </div>
            )
        }
        return <MyLoader />
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        playlistList: state.playlistList,
        signedIn: state.auth.signedIn,
    }
}

export default connect(mapStateToProps, {fetchPlaylists, fetchSongs, loadPlaylist})(PlaylistList)
