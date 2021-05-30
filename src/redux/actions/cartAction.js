import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://backend.buy27.ng/api/products/${slug}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.data.id,
      name: data.data.name,
      image: data.data.image,
      price: data.data.price,
      countInStock: data.data.countInStock,
      slug: data.data.slug,
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
