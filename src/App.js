import React from 'react';
import Home from "./Pages/Home/Home";
import About from "./Pages/About"
import Feature from "./Pages/Feature"
import Service from "./Pages/Services"
import Review from "./Pages/Review"
import BookaDemo from "./Pages/BookaDemo/BookaDemo"
import { Switch, Route } from "react-router-dom";
import "./index.css"

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/review" component={Review} />
        <Route exxact path="/book-a-demo" component={BookaDemo} />
      </Switch>
    </>
  )
}

export default App