import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/actions/authAction";

const DesktopTopMenuBar = ({ isAuthenticated }) => {
  const [active, setActive] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="flex bg-primary-dark w-full h-6 text-white text-sm items-center justify-between px-52 relative ">
      <div className="">
        <a
          className="px-2 border-l-2 border-r-2 border-primary-light "
          href="/"
        >
          English
        </a>
        <a className="px-2 " href="/">
          USD
        </a>
        <a className="px-2 border-l-2 border-r-2 border-primary-light" href="/">
          <PhoneIcon className="px-1" /> Hotlines: (+234) 70123 445 7765
        </a>
      </div>
      <div className="">
        <>
          <button
            className="px-2 border-l-2 border-r-2 border-primary-light focus:outline-none"
            onClick={() => {
              setActive(!active);
            }}
          >
            {isAuthenticated ? "My Account" : "Login / Signup"}{" "}
            <ArrowDropDownIcon />
          </button>
          {active && (
            <div className="bg-primary-dark flex flex-col  absolute border-t-2 border-grey-200 w-52 rounded">
              <div>
                <button
                  onClick={() => {
                    history.push("/Dashboard");
                    return setActive(!active);
                  }}
                  className="px-4 py-2 mt-3 flex items-center w-full focus:outline-none bg-transparent hover:bg-primary-light "
                >
                  <AccountCircleOutlinedIcon className="mr-2" /> My Profile
                </button>
                <button
                  onClick={() => {
                    history.push("/Dashboard/My Orders");
                    return setActive(!active);
                  }}
                  className="px-4 py-2 mb-2 flex items-center w-full focus:outline-none bg-transparent hover:bg-primary-light "
                >
                  <ShoppingBasketOutlinedIcon className="mr-2" /> My Orders
                </button>
              </div>

              {isAuthenticated ? (
                <button
                  onClick={() => {
                    dispatch(logout());
                    window.location.reload(false);
                    return setActive(!active);
                  }}
                  className=" self-auto border-t-2 border-secondary-dark focus:outline-none bg-transparent hover:bg-primary-light rounded py-3 text-sm font-normal"
                >
                  LOGOUT{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    history.push("/login");
                    window.location.reload(false);
                    return setActive(!active);
                  }}
                  className=" self-auto border-t-2 border-secondary-dark focus:outline-none bg-transparent hover:bg-primary-light rounded py-3 text-sm font-normal"
                >
                  LOGIN
                </button>
              )}
            </div>
          )}
          <Link
            className="px-2 border-r-2 border-primary-light"
            to="/ContactUs"
          >
            Contact Us
          </Link>
          <Link className="px-2 border-r-2 border-primary-light" to="/About">
            About Us
          </Link>
        </>
      </div>
    </div>
  );
};

export default DesktopTopMenuBar;
