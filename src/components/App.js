import React from 'react'
import { connect }  from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import SongList from './screens/SongList'
import SongCreate from './screens/SongCreate'
import SongEdit from './screens/SongEdit'
import SongShow from './screens/SongShow'
import Login from './screens/Login'
import PlaylistList from './screens/PlaylistList'

import Footer from './Footer'
import Header from './Header'
import Playlist from './Playlist'

import history from '../history'
import { loadPlaylist, recoverState } from '../actions/playlistActions'


class App extends React.Component {
    componentDidMount() {
        this.props.recoverState()
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/dicsi/" exact component={SongList} />
                        <Route path="/dicsi/songs/new" exact component={SongCreate} />
                        <Route path="/dicsi/songs/edit/:id" exact component={SongEdit} />
                        <Route path="/dicsi/songs/:id" exact component={SongShow} />
                        <Route path="/dicsi/login" exact component={Login} />
                        <Route path="/dicsi/playlists" exact component={PlaylistList} />
                        <Route path="/dicsi/playlists/:id" exact render={({match}) => {
                            this.props.loadPlaylist(match.params.id, true)
                            history.push('/dicsi/')
                        }} />
                    </Switch>
                    <Footer />
                    <Playlist />
                </Router>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        signedIn: state.auth.signedIn
    }
}


export default connect(mapStateToProps, { loadPlaylist, recoverState })(App)