import React from 'react'
import ReactDOM from 'react-dom'
import Alert from '@material-ui/lab/Alert'
import { connect } from 'react-redux'

import '../styles.css'
import { removeAlert } from '../actions/alertActions'

const Modal = props => {

    const alert = props.alert.msg ?
        <Alert onClose={() => {props.removeAlert()}} severity={props.alert.type} >
            {props.alert.msg}
        </Alert>
        : null

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismissed}>
            <div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
                <div className="header">
                    {props.header}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    <div className="centered">
                        {alert}
                    </div>
                    {props.actions}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps, {removeAlert})(Modal)