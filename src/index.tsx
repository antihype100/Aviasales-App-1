import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from "./components/App/App";
import {rootReducer} from "./redux/store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

