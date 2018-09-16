import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './App';
import counterReducer from './store/counterReducer';
import createStore from './redux/createStore';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const initialState = {count: 0};
const store = createStore(counterReducer, initialState);

class Provider extends React.Component { 
	getChildContext() { 
        return { 
            store: this.props.store 
        }
    } 
	render() { 
        return this.props.children 
    }
}
Provider.childContextTypes = {store: PropTypes.object};

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );

registerServiceWorker();
