import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import SongList from './SongList'
import SongCreate from './SongCreate'
import SongEdit from './SongEdit'
import SongDelete from './SongDelete'
import SongShow from './SongShow'

import history from '../history'


const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SongList} />
                    <Route path="/songs/new" exact component={SongCreate} />
                    <Route path="/songs/edit/:id" exact component={SongEdit} />
                    <Route path="/songs/delete/:id" exact component={SongDelete} />
                    <Route path="/songs/:id" exact component={SongShow} />
                </Switch>
            </Router>
        </div>
    )
}


export default App