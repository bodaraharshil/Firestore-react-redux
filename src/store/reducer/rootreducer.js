import Authreducer from './authreducer';
import Projectreducer from './projectreducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const Rootreducer = combineReducers({
    Auth:Authreducer,
    Project:Projectreducer,
    Firestore:firestoreReducer,
    Firebase:firebaseReducer
})

export default Rootreducer;