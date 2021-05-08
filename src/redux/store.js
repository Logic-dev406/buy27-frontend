import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";
import {
  getFeaturedProductsReducer,
  getProductsReducer,
  getProductDetailsReducer,
  getSearchedProductsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getFeaturedProducts: getFeaturedProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getSearchedProducts: getSearchedProductsReducer,
  auth: authReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const userInLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const USER_INITIAL_STATE = {
  auth: {
    user: userInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  // INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
