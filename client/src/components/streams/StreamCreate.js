import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux'
import {createStream} from "../../actions";

class StreamCreate extends React.Component  {

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }
    renderError = ({error, touched}) => {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
       return (
           <div className="field">
               <label>{label}</label>
               <input {...input}/>
               {this.renderError(meta)}
           </div>
       )
    }



    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={'ui form error'}>
                <Field name="title" component={this.renderInput} label={'Enter Title'}/>
                <Field name="description" component={this.renderInput} label={'Enter Description'}/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }


}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Please enter a title'
    }
    if (!formValues.description) {
        errors.title = 'Please enter a description'
    }
    return  errors
}

const formWrapped = reduxForm({
    form: 'StreamCreate',
    validate
})(StreamCreate)

export default connect(null, {createStream})(formWrapped)