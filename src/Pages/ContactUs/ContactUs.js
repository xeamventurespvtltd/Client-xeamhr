import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import ContactSection from "./ContactSection"
import MapSection from "./MapSection";
import BigFooter from "../Footer/BigFooter";
import SmallFooter from "../Footer/SmallFooter";
import { leaveHome } from '../../actions';
import "./ContactUs.css";

const ContactUs = (props) => {
  
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(!props.header){
            //console.log("CALL LEAVE HOME");
            props.leaveHome('headerBook');
        }
    }, [])

    const showLoader = () => {
        setLoading(true)
    }

    const hideLoader = () => {
        setLoading(false)
    }

    return (
        <>
            <>
                <ContactSection showLoader={showLoader} hideLoader={hideLoader} />
                <BigFooter />
                <SmallFooter />
                {(loading) &&
                    <Loader 
                        title="Loading..."
                        loading={loading}
                    />
                }
            </>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

export default connect(mapStateToProps, { leaveHome })(ContactUs)