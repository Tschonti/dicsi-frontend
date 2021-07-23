import React from 'react'
import { connect } from 'react-redux'

import SongForm from './SongForm'
import { createSong } from '../../actions'

const SongCreate = props => {
    return (
        <div className="ui container">
            <h2 className="ui header">
                Új dal felvétele
            </h2>
            <SongForm onSubmit={props.createSong}/>
        </div>
    )
}

export default connect(null, { createSong })(SongCreate)