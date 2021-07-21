import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import { createSong } from '../actions'

const SongCreate = props => {
    return <div className="ui container">Új dicsi felvétele<SongForm onSubmit={props.createSong}/></div>
}

export default connect(null, { createSong })(SongCreate)