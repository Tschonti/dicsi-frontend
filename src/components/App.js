import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import SongList from './screens/SongList'
import SongCreate from './screens/SongCreate'
import SongEdit from './screens/SongEdit'
import SongShow from './screens/SongShow'
import Header from './Header'

import history from '../history'


const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={SongList} />
                    <Route path="/songs/new" exact component={SongCreate} />
                    <Route path="/songs/edit/:id" exact component={SongEdit} />
                    <Route path="/songs/:id" exact component={SongShow} />
                </Switch>
            </Router>
        </div>
    )
}


export default App