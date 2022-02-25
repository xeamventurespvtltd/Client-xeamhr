import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Pages/Home/Home";
import BookaDemo from "./Pages/BookaDemo/BookaDemo"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Header from './components/Header';
import history from './history';
import ScrollToTop from './components/ScrollToTop';

const App = (props) => {
    return (
        <>
            <Router history={history}>
                <ScrollToTop />
                <div>
                    <Route path="/" exact component={Home} />
                </div>
                <div>
                    {(props.header) && <Header className={'headerBook'}/>}
                    <Switch>
                        <Route path={"/contact-us"} exact component={ContactUs} />
                        <Route path={"/book-a-demo"} exact component={BookaDemo} />
                    </Switch>
                </div>
            </Router>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

export default connect(mapStateToProps)(App);