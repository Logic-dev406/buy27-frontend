import React, { useState, useEffect } from "react";
import buy27Logo from "./../assets/images/buy27logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CartItem from "../components/Cart/CartItems";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router";
import { PaystackButton } from "react-paystack";

// const paystackConfig = require("../config/config").paystack;

export const CheckOut = ({
  qtyChangeHandler,
  removeFromCartHandler,
  cartItems,
  getCartTotalPrice,
}) => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia("(max-width:768px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setisMobile(window.matchMedia("(max-width:768px)").matches);
    });
  });

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      return null;
    } else {
      history.push("/login");
    }
  }, [user, history]);

  const publicKey = "pk_test_8d501ba4afd7f76a3e2fea6df99e223ac8739705";
  // console.log(paystackConfig.publicKey);
  // const [reference, setReference] = useState(new Date().getTime());

  const paystackSuccessAction = async (res) => {
    // setReference(new Date().getTime());
  };

  // you can call this function anything
  const paystackCloseAction = () => {
    // setReference(new Date().getTime());
  };

  const componentProps = {
    email: user ? user.email : "",
    amount: getCartTotalPrice() * 100,
    publicKey,
    text: "Proceed to Payment",
    onSuccess: (res) => paystackSuccessAction(res),
    onClose: paystackCloseAction(),
  };

  return (
    <div className="flex flex-col px-0 pb-5 md:pb-10 md:px-52 bg-gray-100 overflow-y-auto h-screen w-full">
      <div className="flex items-center justify-between px-4 md:px-0 pt-3 md:pt-8 pb-3 md:pb-10">
        <a href="/">
          <img className="w-14 md:w-40" src={buy27Logo} alt="logo" />
        </a>
        <p className="text-normal md:text-3xl font-bold">Checkout</p>
        <p></p>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="w-full">
          <div className=" pb-10  px-5 bg-white rounded">
            <h1 className="py-4 mb-4 border-b border-gray-200  font-semibold ">
              Delivery / Pickup Address
            </h1>
            <div className="h-44 w-full bg-transparent border border-primary-dark text-sm rounded ">
              <div className=" flex items-center justify-between py-2 px-4 mb-3 border-b border-primary-dark">
                <p>Deliver to me</p>
                <a href="/Dashboard/Delivery Address/Edit">
                  <button className="focus:outline-none py-1 px-2 rounded bg-primary-dark  text-white">
                    Update Address
                  </button>
                </a>
              </div>
              <h1 className="my-1 px-4 py-1">
                <i>
                  <AccountCircleOutlinedIcon fontSize="small" />
                </i>{" "}
                {user ? user.firstName : ""} {user ? user.lastName : ""}
              </h1>
              <h1 className="my-1 px-4 py-1">
                {" "}
                <i>
                  <LocationOnIcon fontSize="small" />
                </i>{" "}
                {user ? user.street : ""} {user ? user.city : ""}{" "}
                {user ? user.lga : ""}.
              </h1>
              <h1 className="my-1 px-4 py-1">
                {" "}
                <i>
                  <PhoneIcon fontSize="small" />
                </i>{" "}
                {user ? user.phone : ""}
              </h1>
            </div>
          </div>
          <div className=" w-full my-4 rounded ">
            <h1 className="py-5 px-5 mb-4 md:mb-0 bg-white font-semibold ">
              Review Order
            </h1>
            <div className=" w-full px-4 md:px-0 bg-transparent ">
              {isMobile ? null : (
                <div className="flex items-center justify-between text-white font-semibold bg-primary-dark h-10 w-full px-5">
                  <h1>Item Details</h1>
                  <h1>Quantity</h1>
                  <h1>Item Price</h1>
                  <h1>Action</h1>
                </div>
              )}
              {cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.product}
                    item={item}
                    removeFromCartHandler={removeFromCartHandler}
                    qtyChangeHandler={qtyChangeHandler}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-96 w-full md:w-96 ml-0 md:ml-5 bg-white rounded ">
          <h1 className="px-3 my-2 font-bold">Payment Options </h1>
          <div className="border-b border-gray-200"></div>
          <div className="flex justify-between px-3 my-2 text-sm">
            <h1>Subtotal: </h1>
            <h1 className="font-semibold">
              <NumberFormat
                value={getCartTotalPrice()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
              />
            </h1>
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="flex justify-between px-3 my-2 text-sm">
            <h1>Order Surmmary: </h1>
            <h1 className="text-xs text-gray-500 w-24">
              Add your Delivery address at checkout to see delivery charges
            </h1>
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="flex justify-between px-3 my-2 font-bold">
            <h1>Total</h1>
            <h1>
              <NumberFormat
                value={getCartTotalPrice()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
              />
            </h1>
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="flex flex-col px-3 my-5 items-center ">
            <PaystackButton
              className="flex items-center justify-center bg-primary-dark text-sm rounded text-white font-semibold h-10 w-full focus:outline-none"
              {...componentProps}
            />
          </div>
          <div className="border-b border-gray-200"></div>
          <div className="justify-between px-3 my-2 font-light text-sm text-gray-500">
            <h1>Total </h1>
            <h1>Transctions are 100% safe and secure</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
