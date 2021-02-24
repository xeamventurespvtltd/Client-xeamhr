import React from 'react';
import Home from "./Pages/Home/Home";
import BookaDemo from "./Pages/BookaDemo/BookaDemo"
import ContactUs from "./Pages/ContactUs/ContactUs"

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exxact path="/book-a-demo" component={BookaDemo} />
        <Route exxact path="/contact-us" component={ContactUs} />
      </Switch>
    </>
  )
}

export default App