import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import Breadcrumbs from "./components/Breadcrumbs";
import UserDashboard from "./pages/UsersDashboardControl";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import CheckOut from "./pages/CheckOut";

import { useDispatch } from "react-redux";

//Action
import { addToCart } from "./redux/actions/cartAction";
import { getSearchedProducts } from "./redux/actions/productActions";
import { removeFromCart } from "./redux/actions/cartAction";

const App = () => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia("(max-width:768px)").matches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setisMobile(window.matchMedia("(max-width:768px)").matches);
    });
  });

  const [qty, setQty] = useState(1);
  const history = createBrowserHistory();

  const [searchTerm, setSearchTerm] = useState("");

  const SearchedProducts = useSelector((state) => state.getSearchedProducts);
  const { loading, error, products } = SearchedProducts;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const loaduser = useSelector((state) => state.auth);
  const { isAuthenticated } = loaduser;

  const qtyChangeHandler = (slug, qty) => {
    dispatch(addToCart(slug, qty));
  };

  const removeFromCartHandler = (slug) => {
    dispatch(removeFromCart(slug));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartTotalPrice = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div>
          {history.location.pathname === "/signup" ||
          history.location.pathname === "/login" ||
          history.location.pathname === "/forgotpassword" ||
          history.location.pathname === "/Checkout" ? null : (
            <Navbar
              cartItems={cartItems}
              isAuthenticated={isAuthenticated}
              getSearchedProducts={getSearchedProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          )}
          {history.location.pathname === "/signup" ||
          history.location.pathname === "/login" ||
          history.location.pathname === "/Checkout" ||
          history.location.pathname === "/forgotpassword" ||
          isMobile ? null : (
            <Breadcrumbs />
          )}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" history={history} exact component={Login} />
            <Route path="/signup" exact history={history} component={SignUp} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route
              path="/Shop"
              exact
              render={(props) => (
                <Shop {...props} qty={qty} addToCart={addToCart} />
              )}
            />
            <Route
              path="/Shop/:id"
              render={(props) => (
                <ProductDetail
                  {...props}
                  qty={qty}
                  setQty={setQty}
                  addToCart={addToCart}
                />
              )}
            />
            <Route
              path="/Search"
              render={(props) => (
                <Search
                  {...props}
                  searchLoading={loading}
                  searchError={error}
                  searchedProducts={products}
                />
              )}
            />
            <Route
              path="/Dashboard"
              render={(props) => (
                <UserDashboard {...props} isAuthenticated={isAuthenticated} />
              )}
            />
            <Route path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route
              path="/Cart"
              render={(props) => (
                <Cart
                  {...props}
                  qtyChangeHandler={qtyChangeHandler}
                  removeFromCartHandler={removeFromCartHandler}
                  getCartCount={getCartCount}
                  getCartTotalPrice={getCartTotalPrice}
                  cartItems={cartItems}
                />
              )}
            />
            <Route
              path="/Checkout"
              render={(props) => (
                <CheckOut
                  {...props}
                  qtyChangeHandler={qtyChangeHandler}
                  removeFromCartHandler={removeFromCartHandler}
                  getCartCount={getCartCount}
                  getCartTotalPrice={getCartTotalPrice}
                  cartItems={cartItems}
                  addToCart={addToCart}
                />
              )}
            />
            <Route>
              {" "}
              <h1>This page does not exist</h1>{" "}
            </Route>
          </Switch>
          {history.location.pathname === "/signup" ||
          history.location.pathname === "/login" ||
          history.location.pathname === "/forgotpassword" ||
          history.location.pathname === "/Checkout" ? null : (
            <Footer className="fixed" />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
