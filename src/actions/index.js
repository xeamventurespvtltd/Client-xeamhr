import { reset } from 'redux-form';
import axios from '../api/axios';
import history from '../history';
import { LEAVE_HOME, GOTO_HOME, SCROLL_TO, SEND_MAIL, SHOW_LOADER } from './types';

export const leaveHome = (header) => {
    return {
        type: LEAVE_HOME,
        payload: header
    }
}

export const gotoHome = () => {
    history.push('/');
    return {
        type: GOTO_HOME
    }
}

export const scrollTo = (pathName) => {
    return {
        type: SCROLL_TO,
        payload: pathName
    }
}

export const sendMail = (formData, resetPage) => async (dispatch) => {
    axios.post('', formData).then((response) => {
        //console.log("SUBSCRIPTION: ", response.data, formValues.email, token)
        dispatch(showLoader(false));
        if(response.data.status === 1){
            dispatch(reset(resetPage));
            alert(response.data.message);
        }
    }).catch((error) => {
        dispatch(showLoader(false));
        console.log("Subscription Error: ", error)
    })
}

export const showLoader = (value = false) => {
    return {
        type: SHOW_LOADER,
        payload: value
    }
}