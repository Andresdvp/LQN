import{createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer,productDetailsReducer } from './reducer/productReducer';
import { authReducer } from './reducer/userReducer';

const reducer= combineReducers({ 
    //reductor 1 productos
    products:productReducer,
    //reductor 2 detalles
    productDetails: productDetailsReducer,
    //reductor 3 usuarios
    authUser: authReducer
});

let intialState={};

const middleware=[thunk];

const store = createStore (reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

