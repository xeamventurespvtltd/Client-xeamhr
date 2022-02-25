import React from "react";
import { Field, reduxForm } from 'redux-form';
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from 'react-redux';
import { gotoHome } from '../../actions';
import history from "../../history";
import VerticalCarousel from "../../components/VerticalCarosuel";
import { time } from "../Data";
import bookADemo from '../../api/axios';
//import validate from "../../components/validateInfo";
import "../../components/styles/VerticalCarousel.css";

class TimeDuration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: '',
            timeAt: time[0]['value'],
        }
        this.recaptchaRef = React.createRef();
    }

    componentDidMount(){
        //console.log("DATE: ", this.state.date)
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

    renderItem = ({input, meta, type, maxLength = null}) => {
        const condition = (meta.error && meta.touched);
        const className = (condition)? 'form-control rounded-pill demo-border-error' : 'form-control rounded-pill';
        //console.log("RENDER CLASSNAME: ", className)
        return (
            <div className="pb-3 mb-2">
                <input 
                    className={`${className} w-100 pl-5`}
                    type={type} 
                    {...input} 
                    maxLength={maxLength}
                    autoComplete="off" 
                />
                {this.renderError(meta)}
            </div>
        );
    }

    resolveCaptcha = (formValues) => {
        const { hideLoader, date, showLoader } = this.props;
        showLoader();
        this.recaptchaRef.current.execute().then((token) => {
            this.setState({token}, () => {
                const { token } = this.state;
                //console.log("^^^### CAPTCHA: ", this.state.token, formValues)
                bookADemo.post('/', {
                    book: 1,
                    token: token,
                    first_name: formValues.firstName,
                    last_name: formValues.lastName,
                    email: formValues.email,
                    company: formValues.company,
                    mobile: formValues.phoneNumber,
                    timeat: `${date} ${this.state.timeAt}`
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
            })
            hideLoader();
        }).catch((err) => {
            alert(err);
            hideLoader();
        })
    }

    render(){
        const { screenLoader, date, showLoader } = this.props;
        return (
            <section className="time-duration-section container-fluid">
                <h2>User Info:</h2>
                <form className="g-3"
                    onSubmit={this.props.handleSubmit(this.resolveCaptcha)}
                >
                    <div className="row">
                        <div className="col-md-6 col-sm-6 mb-3">
                            <div className="form-body">
                                <label forhtml="exampleFormControlInput1" className="form-label">Enter First Name*</label>
                                {/* <div className="form-validation">
                                    <i className="fas fa-exclamation-circle"></i>
                                </div> */}
                                <Field name="firstName" type="text" component={this.renderItem}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 mb-3">
                            <div className="form-body">
                                <label forhtml="exampleFormControlInput1" className="form-label">Enter Last Name*</label>
                                <Field name="lastName" type="text" component={this.renderItem}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 mb-3">
                            <div className="form-body">
                                <label forhtml="exampleFormControlInput1" className="form-label">Enter Email*</label>
                                <Field name="email" type="email" component={this.renderItem}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 mb-3">
                            <div className="form-body">
                                <label forhtml="exampleFormControlInput1" className="form-label">Enter Company Name*</label>
                                <Field name="company" type="text" component={this.renderItem}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 mb-3">
                            <div className="form-body">
                                <label forhtml="exampleFormControlInput1" className="form-label">Enter Phone Number*</label>
                                <Field maxLength={10} name="phoneNumber" type="text" component={this.renderItem}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 mb-3">
                            <div className="form-body">
                                <label forhtml="exampleFormControlInput1" className="form-label">MEETING DURATION</label>
                                <div className="form-box">
                                    <fieldset disabled>
                                        <input type="text" id="disabledTextInput" className="form-control" placeholder="30 Minutes" />
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <VerticalCarousel
                            data={time}
                            selectedTime={(timeAt) => {
                                this.setState({timeAt}, () => {
                                    //console.log("SELECTION: ", this.state.timeAt)
                                })
                            }}
                        />
                    </div>
                    <div className="time-submit">
                        <div>
                            <ReCAPTCHA
                                ref={this.recaptchaRef}
                                size="invisible"
                                sitekey="6LcGC4ceAAAAAK-2mg8oUKuqT1wNmHVu9ScTi_CY"
                                //onChange={(token) => this.setState({token}, () => console.log("CAPTCHA: ", this.state.token))}
                            />
                        </div>
                        <button>
                            SUBMIT
                        </button>
                    </div>
                </form >
            </section >
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    const firstName = 'firstName';
    const lastName = 'lastName';
    const email = 'email';
    const company = 'company';
    const phoneNumber = 'phoneNumber';
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
        }else if(name === phoneNumber){
            const number = formValues[name].replace(/[^0-9]/g, '');
            if(number.length < 10){
                formValues[name] = number;
                errors[phoneNumber] = "10-digit phone number is required";
            }
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
    if(!formValues[phoneNumber]){
        errors[phoneNumber] = "Phone Number is required";
    }
    //console.log("VALIDATION: ", propsList, errors)
    return errors;
}

export default connect(null, { gotoHome })(reduxForm({
    form: 'bookADemo',
    validate
})(TimeDuration));