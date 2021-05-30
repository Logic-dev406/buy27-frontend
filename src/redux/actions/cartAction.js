import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { response } = await axios.get(
    `https://backend.buy27.ng/api/products/${slug}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: response.data.id,
      name: response.data.name,
      image: response.data.image,
      price: response.data.price,
      countInStock: response.data.countInStock,
      slug: response.data.slug,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (slug) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: slug,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
