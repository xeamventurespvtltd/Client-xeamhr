import React from 'react';
import Home from "./Pages/Home/Home";
<<<<<<< HEAD
import BookaDemo from "./Pages/BookaDemo/BookaDemo"
import ContactUs from "./Pages/ContactUs/ContactUs"
// require('dotenv').config()

=======
import About from "./Pages/About"
import Feature from "./Pages/Feature"
import Service from "./Pages/Services"
import Review from "./Pages/Review"
import BookaDemo from "./Pages/BookaDemo/BookaDemo"
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
import { Switch, Route } from "react-router-dom";
import "./index.css"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
<<<<<<< HEAD
        <Route exxact path="/book-a-demo" component={BookaDemo} />
        <Route exxact path="/contact-us" component={ContactUs} />
=======
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/review" component={Review} />
        <Route exxact path="/book-a-demo" component={BookaDemo} />
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
      </Switch>
    </>
  )
}

export default App