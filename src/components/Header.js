import React from 'react'
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'
import { connect } from 'react-redux'

import { removeAlert } from '../actions'

const Header = (props) => {
    const alert = props.alert.msg ? <Alert onClose={() => {props.removeAlert()}} severity={props.alert.type} >{props.alert.msg}</Alert> : null
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Dicsik listája</Link>
            <Link to="/songs/new" className="item">Új dicsi</Link>
            {alert}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps, { removeAlert })(Header)