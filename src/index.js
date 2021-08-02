import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootreducer';  
    import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'; 
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import fbconfig from './config/fbconfig'

const store = createStore(rootReducer,
    compose(
        // getallfirebae to out app ( getFirebase )
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbconfig), // redux bindings for firestore
        reactReduxFirebase(fbconfig), // redux binding for firebase
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();