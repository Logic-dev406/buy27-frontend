import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UpdateAddress from "./UpdateAddress";

const DeliveryAddress = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div className="bg-white h-screen pt-4 rounded">
            <div className="flex pl-4 md:pl-8 h-5 pb-5 ">
              <a
                href={`${url}/Edit`}
                className="flex text-sm font-semibold py-4 px-4 items-center rounded border border-primary-dark text-black hover:text-white bg-transparent hover:bg-primary-dark"
              >
                <p>Update</p>
              </a>
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
                  {user ? user.street : ""} {user ? user.city : ""}{" "}
                  {user ? user.lga : ""}.
                </h1>
                <h1 className="my-1">
                  {" "}
                  <i>
                    <PhoneIcon fontSize="small" />
                  </i>{" "}
                  {user ? user.phone : ""}
                </h1>
              </div>
            </div>
          </div>
        </Route>

        <Route path={`${path}/Edit`}>
          <UpdateAddress />
        </Route>
      </Switch>
    </div>
  );
};

export default DeliveryAddress;
