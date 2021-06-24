import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducer';
import { authReducer } from './reducers/authReducer';
import { orderReducer } from './reducers/orderReducer';
import {
  getFeaturedProductsReducer,
  getProductsReducer,
  getProductDetailsReducer,
  getSearchedProductsReducer,
} from './reducers/productReducer';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getFeaturedProducts: getFeaturedProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getSearchedProducts: getSearchedProductsReducer,
  auth: authReducer,
  orderInfo: orderReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
