import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { isMobileOnly } from 'react-device-detect'

import MyModal from './../MyModal'
import MyTooltip from '../MyTooltip'

const renderInput = ({ input, label, meta, type, disabled, wide, tip }) => {
    return (
        <div className={`${wide} field ${meta.error && meta.touched ? 'error' : ''}`}>
            <label>{label}</label>
            <input {...input} type={type} autoComplete="off" disabled={disabled} data-tip={tip} />
            {renderError(meta)}
        </div>
    )
}

const renderTextArea = ({ input, label, meta, tip }) => {
    return (
        <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
            <label>{label}</label>
            <textarea {...input} autoComplete="off" data-tip={tip}/>
            {renderError(meta)}
        </div>
    )
}

const renderError = ({ error, touched }) => {
    if (touched && error) {
        return (
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        )
    }
}

const SongForm = props => {

    const onSubmit = formValues => {
        props.onSubmit(formValues)
    }

    const buttons = () => {
        if (!props.edit) {
            return <button className="ui button primary">Mentés</button>
        }
        return (
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <button className={`ui button primary ${isMobileOnly ? 'my-bigger-button' : ''}`}>Mentés</button>
                        <Link to={`/dicsi/songs/${props.id}`} className={`ui button grey ${isMobileOnly ? 'my-bigger-button' : ''}`}>Mégse</Link>
                    </div>
                    <div className="column jobbra">
                        <MyModal
                            header="Biztosan törlöd ezt az éneket?"
                            content={`Biztosan törlöd a(z) ${props.initialValues.title} éneket? Ezt később nem tudod visszavonni!`}
                            closeText="Mégse"
                            approveText="Törlés"
                            onApprove={props.onDeleteClick}
                        >
                            <button type="button" className={`ui button negative ${isMobileOnly ? 'my-bigger-button' : ''}`}>Ének törlése</button>
                        </MyModal>
                    </div>
                </div>
                <div className="ui vertical divider">
                    vagy
                </div>
            </div>
        )
    }

    return (
        <>
            <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
                <MyTooltip />
                <div className="fields">
                    <Field wide="three wide" tip="Az ének sorszáma. Egyedi, később nem változtatható" name="id" component={renderInput} label="Sorszám" type="number" props={{ disabled: props.edit}}/>
                    <Field wide="thirteen wide" name="title" component={renderInput} label="Cím" type="text"/>
                </div>
                <Field tip="Az alkalmazás dupla sorközöknél bontja versszakokra a szöveget." name="lyrics" component={renderTextArea} label="Dalszöveg"/>
                {buttons()}
            </form>
            {props.children}
        </>
    )
}

const validate = formValues => {
    const errors = {}
    if (!formValues.id) {
        errors.id = 'Add meg az ének sorszámát!'
    }
    if (!formValues.title) {
        errors.title = 'Add meg az ének címét!'
    }
    if (!formValues.lyrics) {
        errors.lyrics = 'Add meg a dalszöveget!'
    }
    return errors
}

export default reduxForm({
    form: 'songForm',
    validate
})(SongForm)