import React from 'react'
import ReactDOM from 'react-dom'


const Modal = props => {

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismissed}>
            <div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
                <div className="header">
                    {props.header}
                </div>
                <div className="content">
                    {props.content}
                    <div className="ui form" >
                        <label>A megerősítéshez add meg a jelszót!</label>
                        <input value={props.password} onChange={(event) => props.setPassword(event.target.value)} type="password" />
                    </div>
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal