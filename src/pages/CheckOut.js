import React from "react";
import buy27Logo from "./../assets/images/buy27logo.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const CheckOut = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col px-52 bg-gray-100 h-screen w-full">
      <div className="flex items-center justify-between  pt-8 pb-14">
        <img className="w-40" src={buy27Logo} alt="logo" />
        <p className="text-3xl font-bold">Checkout</p>
        <p></p>
      </div>
      <div className="flex ">
        <div>
          <div className=" pb-10 px-5 bg-white rounded">
            <h1 className="py-4 mb-4 border-b border-gray-200 text font-semibold ">
              Delivery / Pickup Address
            </h1>
            <div className="h-44 w-96 bg-transparent border border-primary-dark text-sm rounded ">
              <div className=" flex items-center justify-between py-2 px-4 mb-3 border-b border-primary-dark">
                <p>Deliver to me</p>
                <a href="/">
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
                {user.street} {user.city} {user.lga}.
              </h1>
              <h1 className="my-1 px-4 py-1">
                {" "}
                <i>
                  <PhoneIcon fontSize="small" />
                </i>{" "}
                {user.phone}
              </h1>
            </div>
          </div>
          <div className="h-52 mt-4 w-96 bg-white">
            <h1 className="py-4 px-5 mb-4  text font-semibold ">
              Review Order
            </h1>
            {/* <div className=" w-full bg-transparent mr-8">
              <div className="flex items-center justify-between text-white font-semibold bg-primary-dark h-10 w-full px-5">
                <h1>Item Details</h1>
                <h1>Quantity</h1>
                <h1>Item Price</h1>
                <h1>Action</h1>
              </div>
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
            </div> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckOut;
