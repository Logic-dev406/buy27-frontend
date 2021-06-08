import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const DeliveryAddress = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div>
      <div className="bg-white h-screen pt-4 rounded">
        <div className="flex pl-8 h-5 pb-5 ">
          <h1 className="flex text-sm font-semibold py-4 items-center">
            <p>My Delivery Address</p>
          </h1>
        </div>
        <div className="border-b mb-4 mt-7 "></div>
        <div className="bg-transparent border h-40 md:w-96 mx-4 md:mx-8 rounded">
          <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-primary-dark ">
            <div>
              <h1>Address</h1>
            </div>
          </div>
          <div className="border-b  "></div>

          <div className="flex flex-col pt-4 px-4 text-primary-dark text-sm">
            <h1 className="my-1">
              <i>
                <AccountCircleOutlinedIcon fontSize="small" />
              </i>{" "}
              {user ? user.firstName : ""} {user ? user.lastName : ""}
            </h1>
            <h1 className="my-1">
              {" "}
              <i>
                <LocationOnIcon fontSize="small" />
              </i>{" "}
              {user.street} {user.city} {user.lga}.
            </h1>
            <h1 className="my-1">
              {" "}
              <i>
                <PhoneIcon fontSize="small" />
              </i>{" "}
              {user.phone}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
