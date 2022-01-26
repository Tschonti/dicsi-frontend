import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { moveInPlaylist, removeFromPlaylist} from '../actions/playlistActions'

class PlaylistItem extends React.Component {

    render() {
        const upDisabled = this.props.idx === 0
        const downDisabled = this.props.idx === this.props.length - 1
        return (
            <div className={`item my-item ${this.props.currentIndex === this.props.idx ? 'activeInPlaylist' : ''}`}>
                <h5 className="header">
                    <i className={`${upDisabled ? 'grey' : 'pointer'} icon caret up bigger-icon`} onClick={() => this.props.moveInPlaylist(this.props.idx, true)}></i>
                    <i className={`${downDisabled ? 'grey' : 'pointer'} icon caret down bigger-icon`} onClick={() => this.props.moveInPlaylist(this.props.idx, false)}></i>
                    <Link to={`/dicsi/songs/${this.props.song.id}`} className="notLinkStyle pointer">{this.props.song.id}. {this.props.song.title}</Link>

                    <div className="right floated">
                        <i className="icon minus circle red pointer" onClick={() => this.props.removeFromPlaylist(this.props.song.id)}></i>
                    </div>
                </h5>
            </div>
        )
    }

}

export default connect(null, {moveInPlaylist, removeFromPlaylist})(PlaylistItem)