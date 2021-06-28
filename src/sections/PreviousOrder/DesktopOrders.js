import React from 'react';
import { TabGroup } from '@statikly/funk';
import { Link, Switch, Route } from 'react-router-dom';
import OrdersDetails from '../../components/OrderDetail/OrderDetails';
import dateFormat from 'dateformat';

const DesktopOrders = ({ path, url, orders, loading, error }) => {
  /// handle error popup

  console.log(orders);
  return (
    <div>
      <Switch>
        <Route exact={true} path={path}>
          <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
            <div className=" bg-white">
              <div className="flex flex-col justify-center pl-4 h-16 w-full bg-white border-b">
                <h1 className="font-bold text-sm">My Orders</h1>
              </div>
              <div className="flex flex-col justify-center pl-4 h-16 w-full bg-white border-b border-gray">
                <TabGroup.TabList>
                  <TabGroup.Tab
                    index={0}
                    className="h-16 px-4 transition-colors duration-150"
                    activeClassName=" focus:outline-none text-primary-dark border-b-2 border-primary-dark"
                    inactiveClassName="text-gray-500 focus:outline-none"
                  >
                    Open Orders (2)
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={1}
                    className="h-16 px-4 transition-colors duration-150"
                    activeClassName=" focus:outline-none text-primary-dark border-b-2 border-primary-dark"
                    inactiveClassName="text-gray-500 focus:outline-none"
                  >
                    Closed Orders (4)
                  </TabGroup.Tab>
                </TabGroup.TabList>
              </div>
              <div className="flex flex-col items-center h-screen w-full overflow-y-auto pt-4">
                <TabGroup.TabPanel
                  index={0}
                  className=" px-4  pb-4 transition-all transform flex flex-col"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : orders ? (
                    orders
                      .filter(
                        (order) => order.status === 'pending' || 'delevered'
                      )
                      .map((order) => (
                        <div key={order._id}>
                          <div className=" flex flex-col justify-between py-4 px-4 mb-4 bg-transparent border border-gray rounded ">
                            <div className="flex flex-col">
                              <div className="flex justify-between">
                                <div className="flex mr-52">
                                  <h1 className="font-semibold">Order No:</h1>
                                  <h1 className="font-normal ml-1">
                                    {order.orderNo}
                                  </h1>
                                </div>
                                <Link
                                  to={`${url}/${order.orderNo}`}
                                  className="text-sm text-primary-dark font-semibold"
                                >
                                  SEE DETAILS
                                </Link>
                              </div>
                              <div className="flex mb-1">
                                <h1 className="font-semibold">Date:</h1>
                                <h1 className="font-normal ml-1">
                                  {' '}
                                  {dateFormat(
                                    order.dateOrdered,
                                    'dd-mm-yyyy'
                                  )}{' '}
                                </h1>
                              </div>
                              <div className=" flex flex-col mb-2 items-center justify-center text-white rounded text-xs h-5 w-16 bg-primary-dark">
                                <h1 className="">
                                  {' '}
                                  {order.status.toUpperCase()}{' '}
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {order.orderItems.map((orderItem) => {
                                return (
                                  <img
                                    key={orderItem._id}
                                    className="h-10 w-10 mr-2 bg-black"
                                    src={orderItem.product.image}
                                    alt="product"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div>You have no order</div>
                  )}
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                  index={1}
                  className=" px-4  pb-4 transition-all transform flex flex-col"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : orders ? (
                    orders
                      .filter((order) => order.status === 'closed')
                      .map((order) => (
                        <div key={order._id}>
                          <div className=" flex flex-col justify-between py-4 px-4 mb-4 bg-transparent border border-gray rounded ">
                            <div className="flex flex-col">
                              <div className="flex justify-between">
                                <div className="flex mr-52">
                                  <h1 className="font-semibold">Order No:</h1>
                                  <h1 className="font-normal ml-1">
                                    {order.orderNo}
                                  </h1>
                                </div>
                                <Link
                                  to={`${url}/${order.orderNo}`}
                                  className="text-sm text-primary-dark font-semibold"
                                >
                                  SEE DETAILS
                                </Link>
                              </div>
                              <div className="flex mb-1">
                                <h1 className="font-semibold">Date:</h1>
                                <h1 className="font-normal ml-1">
                                  {' '}
                                  {dateFormat(
                                    order.dateOrdered,
                                    'dd-mm-yyyy'
                                  )}{' '}
                                </h1>
                              </div>
                              <div className=" flex flex-col mb-2 items-center justify-center text-white rounded text-xs h-5 w-16 bg-primary-dark">
                                <h1 className="">
                                  {' '}
                                  {order.status.toUpperCase()}{' '}
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {order.orderItems.map((orderItem) => {
                                return (
                                  <img
                                    key={orderItem._id}
                                    className="h-10 w-10 mr-2 bg-black"
                                    src={orderItem.product.image}
                                    alt="product"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div>You have no cancelled order</div>
                  )}
                </TabGroup.TabPanel>
              </div>
            </div>
          </TabGroup>
        </Route>
        <Route exact={true} path={`${path}/:orderNo`}>
          <OrdersDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default DesktopOrders;
