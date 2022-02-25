import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assests/image/favicon.png'
import { connect } from 'react-redux';
import { leaveHome, gotoHome, scrollTo } from '../actions';
import useSticky from "./UseSticky";

const Header = (props) => {
    const { isSticky, element } = useSticky();
    let NavBar = useRef();
    let aboutUsRef = useRef();
    let servicesRef = useRef();
    let featuresRef = useRef();
    let reviewRef = useRef();
    const headerBook = 'headerBook';
    let defaultCSS = 'headerHome';

    useEffect(() => {
        //console.log("PATHNAME: ", props.pathName)
        if(props.pathName === '/#aboutus'){
            handleClick(null, aboutUsRef);
        }else if(props.pathName === '/#services'){
            handleClick(null, servicesRef);
        }else if(props.pathName === '/#feature'){
            handleClick(null, featuresRef);
        }else if(props.pathName === '/#review'){
            handleClick(null, reviewRef);
        }
    }, []);

    const handleClick = (e, ref = null) => {
        let item = null;
        if(e){
            e.preventDefault();
            item = e.currentTarget;
        }else{
            item = ref.current;
            //console.log("REF: ", item.hash.slice(1))
        }
        let menuObj = item.closest(".menu-body")
        if(menuObj){ 
            menuObj.classList.remove("show");
        }
        const id = item.getAttribute("href").slice(2);
        const section = document.getElementById(id);
        if(!section){
            return;
        }
        // console.log("IDDDDD", section, id)
        // console.log("ITEM ID: ", id, item.getAttribute("href"));
        // console.log("SECTION: ", section, section.offsetTop);
        let position = section.offsetTop;
        let NavBarHeight = null;
        if(e){
            NavBarHeight = NavBar.current.offsetHeight;
        }else{
            let navbar = document.getElementById("navBar");
            NavBarHeight = navbar.offsetHeight;
            props.scrollTo(null);
        }
        window.scrollTo({
            left: 0,
            top: (position - NavBarHeight)
        });
    }

    function renderNavBar(className = null){
        return (
            <nav id="navBar" className="container navbar navbar-expand-lg navbar-light myNavbar">
                <div
                    style={{cursor: 'pointer'}}
                    className="navbar-brand" 
                    onClick={() => {
                        if(window.location.pathname !== '/'){
                            props.gotoHome();
                            return;
                        }
                        window.scrollTo(0, 0);
                    }}
                >
                    <div>
                        <img style={{width: '30%'}} src={require("../assests/image/favicon.png")}/>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="menu-body collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li onClick={() => props.gotoHome()} className="nav-item">
                        <Link to={(className)? "/" : "/#home"} className="nav-link active" aria-current="page">
                            HOME
                        </Link>
                    </li>
                    <li onClick={() => props.gotoHome()} className="nav-item">
                        <Link 
                            ref={aboutUsRef}
                            onClick={(e) => {
                                if(className){
                                    props.scrollTo('/#aboutus');
                                    return;
                                }
                                handleClick(e);
                            }}
                            to={(className)? "/" : "/#aboutus"} 
                            className="nav-link" 
                            aria-current="page"
                        >
                            ABOUT US
                        </Link>
                    </li>
                    <li onClick={() => props.gotoHome()} className="nav-item">
                        <Link 
                            ref={servicesRef}
                            onClick={(e) => {
                                if(className){
                                    props.scrollTo('/#services');
                                    return;
                                }
                                handleClick(e);
                            }} 
                            to={(className)? "/" : "/#services"} 
                            className="nav-link" 
                            aria-current="page"
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li onClick={() => props.gotoHome()} className="nav-item">
                        <Link 
                            ref={featuresRef}
                            onClick={(e) => {
                                if(className){
                                    props.scrollTo('/#feature');
                                    return;
                                }
                                handleClick(e);
                            }} 
                            to={(className)? "/" : "/#feature"} 
                            className="nav-link" 
                            aria-current="page"
                        >
                            FEATURES
                        </Link>
                    </li>
                    <li onClick={() => props.gotoHome()} className="nav-item">
                        <Link 
                            ref={reviewRef}
                            onClick={(e) => {
                                if(className){
                                    props.scrollTo('/#review');
                                    return;
                                }
                                handleClick(e);
                            }} 
                            to={(className)? "/" : "/#review"}  
                            className="nav-link" 
                            aria-current="page"
                        >
                            REVIEWS
                        </Link> 
                    </li>
                    <li onClick={() => props.leaveHome(headerBook)} className="nav-item">
                        <Link to="/contact-us" className="nav-link" aria-current="page">
                            CONTACT US
                        </Link>
                    </li>
                </ul>
                </div>
                <div onClick={() => props.leaveHome(headerBook)} className="demo-button">
                    <Link to="/book-a-demo">BOOK A DEMO</Link>
                </div>
            </nav>
        );
    }

    if(!props.className){
        defaultCSS = (isSticky)? 'headerHome navbar-sticky' : 'headerHome';
        return (
            <div id="home" className="main-banner">
                <div ref={NavBar} className={defaultCSS}>
                    {renderNavBar()}
                </div>
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-body">
                            <h1 className="mb-2">{props.heading}</h1>
                            <h5 className="mb-4">{props.subHeading}</h5>
                            <Link onClick={() => props.leaveHome(headerBook)} to="/book-a-demo" type="button">Book a Demo</Link>
                        </div>
                    </div>
                    <div
                        //onClick={() => props.gotoHome()}
                        className="down-arrow"
                        ref={element}
                    >
                        <Link onClick={handleClick} to="/#aboutus">
                            <i className="fas fa-chevron-down"></i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }else{
        defaultCSS = headerBook;
        return (
            <div className={defaultCSS}>
                {renderNavBar(props.header)}
            </div>
        )
    }
        
    
}

const mapStateToProps = (state) => {
    return {
        header: state.header,
        pathName: state.scrollTo
    }
}

export default connect(mapStateToProps, { 
    leaveHome, gotoHome, scrollTo
})(Header);