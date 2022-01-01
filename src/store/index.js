import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {createReducer} from './rootreducers';
const getLocal = () => {
    try {
        let serializeState =localStorage.getItem('state');
        if(serializeState !== null) {
            return JSON.parse(serializeState)
        } else {
            return {}
        }
    }catch(err) {
        return {}
    }
}
const saveToLocal = (state) => {
    try {
        let serializeState = JSON.stringify(state);
        localStorage.setItem('state', serializeState)
    }catch(err) {
       console.log('error saving state')
    }
}
const currentState = getLocal();
const env = 'dev';
const composeEnhancer = env === 'dev' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer =composeEnhancer(applyMiddleware(thunk))
const store = createStore(createReducer,currentState, enhancer);
store.subscribe(() => saveToLocal(store.getState()))
export default store;