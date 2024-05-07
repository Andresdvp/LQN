import{createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer,productDetailsReducer } from './reducer/productReducer';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';


const reducer= combineReducers({ 
    //reductor 1 productos
    products:productReducer,
    //reductor 2 detalles
    productDetails: productDetailsReducer,
    //reductor 3 usuarios
    auth: authReducer,
    //reductor 4 perfil y contraseñas
     user: userReducer,
     // reductor 5 recuperar contraseña
     forgotPassword: forgotPasswordReducer,
    //reducer 6 cart
    cart: cartReducer
});

let intialState={
    //usa la memoria del navegador
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    }
};

const middleware=[thunk];

const store = createStore (reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

