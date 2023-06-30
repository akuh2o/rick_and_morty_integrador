import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// conviene poner esto por defecto.
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk))); //nos mejora la capacidad de nuestra store
// esta la de los videos, que usa 'windows'.

export default store;