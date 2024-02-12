import{createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer,productDetailsReducer } from './reducer/productReducer';
 
const reducer= combineReducers({ 
    //reductor 1 
    products:productReducer,
    //reductor 2 detalles
    productDetails: productDetailsReducer
});

let intialState={};

const middleware=[thunk];

const store = createStore (reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

