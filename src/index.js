import React from "react"
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxThunk from 'redux-thunk';
import App from "./App";
import reducers from "./reducers";

const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(reduxThunk))
    );

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector("#root")
);