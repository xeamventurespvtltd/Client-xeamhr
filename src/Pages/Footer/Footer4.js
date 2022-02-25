import React, { useState } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import ReCAPTCHA from "react-google-recaptcha";
import { sendMail, showLoader } from '../../actions';

class Footer4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            response: null,
            token: ''
        }
        this.recaptchaRef = React.createRef();
    }
  
    handleSubmit = (formValues) => {
        this.props.showLoader(true);
        this.recaptchaRef.current.execute().then((token) => {
            this.setState({token}, () => {
                const { token } = this.state;
                const formData = {
                    subscribe: 1,
                    email: formValues.email,
                    token: token
                }
                this.props.sendMail(formData, 'homePage');
            })
        })
    }

    renderError = ({error, touched}) => {
        //console.log("CHECK IF TOUCHED: ", error, touched)
        if(error && touched){
            //console.log("@@@ TOUCHED: ", error, touched)
            return (
                <div className="position-absolute">
                    <p className="fw-light demo-error-color">{error}</p>
                </div>
            );
        }
    }

    renderItem = ({input, placeholder, meta, type}) => {
        const className = 'form-control';
        //console.log("RENDER CLASSNAME: ", className)
        return (
            <div className="pb-3 mb-2">
                <input 
                    className={`${className} w-100 pl-5`} 
                    type={type} 
                    {...input} 
                    placeholder={placeholder}
                    autoComplete="off" 
                />
                {this.renderError(meta)}
            </div>
        );
    }

    emailHandle = () => {
        if (!this.props.loader) {
            return (
                <form className="row g-3" onSubmit={this.props.handleSubmit(this.handleSubmit)} method="post">
                    <div className="col-auto">
                        <Field placeholder="Email Address" name="email" type="email" component={this.renderItem} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">SUBSCRIBE</button>
                    </div>
                </form>
            )
        }else {
            return (
                <div className="d-flex justify-content-center text-white">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }
    }

    render(){
        const { title, para } = this.props;
        return (
            <div className="footer-contact">
                <h6>{title}</h6>
                <p>{para}</p>
                {this.emailHandle()}
                <div>
                    <ReCAPTCHA
                        ref={this.recaptchaRef}
                        size="invisible"
                        sitekey="6LcGC4ceAAAAAK-2mg8oUKuqT1wNmHVu9ScTi_CY"
                        //onChange={(token) => this.setState({token}, () => console.log("CAPTCHA: ", this.state.token))}
                    />
                </div>
            </div>
        )
    }
}

const validate = (formValues) => {
    //console.log("VALIDATION: ", formValues)
    const errors = {};
    const email = 'email';
    if(formValues[email]){
        const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const text = formValues[email].toLowerCase();
        const trimmedText = text.trim();
        if(check.test(String(trimmedText))){
            formValues['name'] = trimmedText;
        }else{
            formValues[email] = trimmedText;
            errors[email] = 'Invalid E-mail';
        }
    }
    if(!formValues[email]){
        errors[email] = "Email is required";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        loader: state.loader
    }
}

export default connect(mapStateToProps, { sendMail, showLoader })(reduxForm({
    form: 'homePage',
    validate
})(Footer4));