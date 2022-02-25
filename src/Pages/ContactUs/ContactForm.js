import React, { useState, useEffect } from "react";
import { Field, reduxForm } from 'redux-form';
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from 'react-redux';
import { gotoHome } from '../../actions';
import history from '../../history';
import contactForm from '../../api/axios';

class ContactForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            token: ''
        }
        this.recaptchaRef = React.createRef();
    }

    async componentDidMount(){
    }

    submitForm = async (formValues) => {
        const { showLoader, hideLoader } = this.props;
        showLoader();
        this.recaptchaRef.current.execute().then((token) => {
            this.setState({token}, () => {
                const { token, comment } = this.state;
                //console.log("@@@ CAPTCHA: ", token, formValues);
                contactForm.post('/', {
                    contact: 1,
                    token: token,
                    first_name: formValues.firstName,
                    last_name: formValues.lastName,
                    company: formValues.company,
                    email: formValues.email,
                    comment: comment
                }).then((response) => {
                    hideLoader();
                    //console.log("CONTACT RESPONSE: ", response);
                    if(response.data.status === 1){
                        history.push('/');
                        alert(response.data.message);
                        this.props.gotoHome();
                    }
                }).catch((error) => {
                    hideLoader();
                    //console.log("CONTACT ERROR: ", error);
                    alert(error);
                })
                hideLoader();
            })
        }).catch((err) => {
            alert(err);
            hideLoader();
        })
    }

    renderError = ({error, touched}) => {
        //console.log("CHECK IF TOUCHED: ", error, touched)
        if(error && touched){
            //console.log("@@@ TOUCHED: ", error, touched)
            return (
                <div className="position-absolute">
                    <p className="fw-light error-color">{error}</p>
                </div>
            );
        }
    }

    renderItem = ({input, label, meta, type}) => {
        const className = `${(meta.error && meta.touched)? 'form-control error' : 'form-control'}`;
        //console.log("RENDER CLASSNAME: ", className)
        return (
            <div className="pb-3 mb-2">
                <label className="label-color">{label}</label>
                <input 
                    className={`${className} w-100 pl-5`} 
                    type={type} 
                    {...input} 
                    autoCapitalize="word"
                    autoComplete="off" 
                />
                {this.renderError(meta)}
            </div>
        );
    }

    render(){
        const { comment } = this.state;
        const { showLoader } = this.props;
        return (
            <div className="conForm-body">
                <form className="form error" onSubmit={this.props.handleSubmit(this.submitForm)}>
                    <Field name="firstName" type="text" component={this.renderItem} label="FIRST NAME*"/>
                    <Field name="lastName" type="text" component={this.renderItem} label="LAST NAME*"/>
                    <Field name="email" type="email" component={this.renderItem} label="E-MAIL*"/>
                    <Field name="company" type="text" component={this.renderItem} label="COMPANY NAME*"/>
                    <div>
                        <label className="label-color">COMMENT</label>
                        <textarea 
                            className={`form-control w-100 pl-3 p-4 pt-2`} 
                            value={comment} 
                            autoComplete="off" 
                            onChange={(e) => {
                                this.setState({comment: e.target.value.replace(/^\w/, (c) => c.toUpperCase())})
                            }}
                            style={{resize: "none"}}
                        />
                    </div>
                    <div>
                        <ReCAPTCHA
                            ref={this.recaptchaRef}
                            size="invisible"
                            sitekey="6LcGC4ceAAAAAK-2mg8oUKuqT1wNmHVu9ScTi_CY"
                            //onChange={(token) => this.setState({token}, () => console.log("CAPTCHA: ", this.state.token))}
                        />
                    </div>
                    <button className="btn btn-primary mt-4">SUBMIT</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    //console.log("VALIDATION: ", formValues)
    const errors = {};
    const firstName = 'firstName';
    const lastName = 'lastName';
    const email = 'email';
    const company = 'company';
    const comment = 'comment';
    const propsList = Object.keys(formValues);
    propsList.forEach((name) => {
        if(name === firstName || name === lastName){
            //console.log("BEFORE: ", formValues[name])
            const text = formValues[name].replace(/[^A-Za-z ]/gi,'').trim();
            formValues[name] = text.replace(/^\w/, (c) => c.toUpperCase());
            //console.log("AFTER: ", formValues[name])
        }else if(name === email){
            const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const text = formValues[name].toLowerCase();
            const trimmedText = text.trim();
            if(check.test(String(trimmedText))){
                formValues[name] = trimmedText;
            }else{
                formValues[name] = trimmedText;
                errors[name] = 'Invalid E-mail';
            }
        }else if(name === company){
            const text = formValues[name].replace(/[^A-Za-z ]/gi,'').trimLeft();
            formValues[name] = text.replace(/^\w/, (c) => c.toUpperCase());
        }
    })
    if(!formValues[firstName]){
        errors[firstName] = "First Name is required";
    }
    if(!formValues[lastName]){
        errors[lastName] = "Last Name is required";
    }
    if(!formValues[email]){
        errors[email] = "Email is required";
    }
    if(!formValues[company]){
        errors[company] = "Company Name is required";
    }
    return errors;
}

export default connect(null, { gotoHome })(reduxForm({
    form: 'contact-us',
    validate
})(ContactForm));