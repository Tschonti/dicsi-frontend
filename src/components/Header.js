import React from 'react'
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'
import { connect } from 'react-redux'

import { removeAlert } from '../actions'

const styleSheet = {
    link: {
        marginTop: 'auto',
        marginBottom: 'auto'
    }
}

const Header = (props) => {
    const alert = props.alert.msg ?
        <Alert onClose={() => {props.removeAlert()}} severity={props.alert.type} style={{zIndex: '1500'}} >
            {props.alert.msg}
        </Alert>
        : null
    return (
        <div className="ui secondary pointing menu" style={{height: '52px'}}>
            <Link to="/" className="item" style={styleSheet.link}>Dalok listája</Link>
            <Link to="/songs/new" className="item" style={styleSheet.link}>Új dal</Link>
            <div style={{margin: 'auto'}}>
                {alert}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps, { removeAlert })(Header)