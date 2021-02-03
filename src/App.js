import React from 'react';
import Home from "./Pages//home/Home";
import About from "./Pages/About"
import Feature from "./Pages/Feature"
import Service from "./Pages/Services"
import Review from "./Pages/Review"
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
      </Switch>
    </>
  )
}

export default App