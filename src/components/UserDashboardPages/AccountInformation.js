import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import UpdateAddress from "./UpdateAddress";

export const AccountInformation = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact={true} path={path}>
          <div className="bg-white h-screen pt-4 rounded">
            <div className="flex pl-8 h-5 pb-5 ">
              <Link
                className="flex text-sm font-semibold bg-transparent hover:bg-primary-dark border border-primary-dark text-primary-dark hover:text-white rounded px-4 py-4 items-center"
                to={`${url}/Edit`}
              >
                <h1>Update</h1>
              </Link>
            </div>
            <div className="border-b mb-4 mt-7 "></div>
            <div className="bg-transparent border h-40 md:w-96 mx-4 md:mx-8 rounded">
              <div className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-primary-dark ">
                <div>
                  <h1>Account Details</h1>
                </div>
              </div>
              <div className="border-b  "></div>

              <div className="flex flex-col pt-4 px-4 text-primary-dark text-sm">
                <h1 className="my-1 ">Sunday Patrick</h1>
                <h1 className="my-1 ">Sunday@gmail.com</h1>
              </div>
            </div>
          </div>
        </Route>
        <Route exact={true} path={`${path}/Edit`}>
          <UpdateAddress />
        </Route>
      </Switch>
    </div>
  );
};

export default AccountInformation;
