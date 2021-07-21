import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderInput = ({ input, label, meta, type }) => {
    return (
        <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
            <label>{label}</label>
            <input {...input} type={type} autoComplete="off"/>
            {renderError(meta)}
        </div>
    )
}

const renderTextArea = ({ input, label, meta }) => {
    return (
        <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
            <label>{label}</label>
            <textarea {...input} autoComplete="off"/>
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

    return (
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="id" component={renderInput} label="Sorszám" type="number"/>
            <Field name="title" component={renderInput} label="Cím" type="text"/>
            <Field name="lyrics" component={renderTextArea} label="Dalszöveg"/>
            <Field name="pwd" component={renderInput} label="Jelszó" type="password"/>
            <button className="ui button primary">Mentés</button>
        </form>
    )
}

const validate = formValues => {
    const errors = {}

    if (!formValues.id) {
        errors.id = 'Add meg a dal sorszámát!'
    }

    if (!formValues.title) {
        errors.title = 'Add meg a dal címét!'
    }
    if (!formValues.lyrics) {
        errors.lyrics = 'Add meg a dalszöveget!'
    }
    if (!formValues.pwd) {
        errors.pwd = 'Add meg a jelszót!'
    }
    return errors
}

export default reduxForm({
    form: 'songForm',
    validate
})(SongForm)