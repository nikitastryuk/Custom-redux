import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './App';
import  store from './store/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


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
