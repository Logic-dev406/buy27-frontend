import React from 'react';
import { TabGroup } from '@statikly/funk';
import { Link, Switch, Route } from 'react-router-dom';
import OrdersDetails from '../../components/OrderDetail/OrderDetails';
import dateFormat from 'dateformat';

const MobileOrders = ({ path, url, orders, loading, error }) => {
  return (
    <div className="w-full">
      <Switch>
        <Route exact={true} path={path}>
          <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
            <div className=" bg-white">
              <div className="flex flex-col justify-center pl-4 h-16 w-screen bg-white border-b">
                <h1 className="font-bold text-sm">My Orders</h1>
              </div>
              <div className=" flex flex-col justify-center pl-2 h-16 w-full bg-white border-b border-gray">
                <TabGroup.TabList>
                  <TabGroup.Tab
                    index={0}
                    className="h-16 px-2 transition-colors duration-150"
                    activeClassName=" focus:outline-none text-primary-dark border-b-2 border-primary-dark"
                    inactiveClassName="text-gray-500 focus:outline-none"
                  >
                    Open Orders (2)
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={1}
                    className="h-16 px-2 transition-colors duration-150"
                    activeClassName=" focus:outline-none text-primary-dark border-b-2 border-primary-dark"
                    inactiveClassName="text-gray-500 focus:outline-none"
                  >
                    Closed Orders (4)
                  </TabGroup.Tab>
                </TabGroup.TabList>
              </div>
              <div className=" relative flex flex-col items-center h-screen w-screen overflow-y-auto pt-4 ">
                <TabGroup.TabPanel
                  index={0}
                  className=" absolute pb-4 w-full transition-all transform flex flex-col items-center"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName=" opacity-0 -translate-x-2"
                >
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : (
                    orders
                      .filter(
                        (order) => order.status === 'pending' || 'delevered'
                      )
                      .map((order) => (
                        <Link
                          key={order._id}
                          to={`${url}/${order.orderNo}`}
                          className=" flex justify-between mb-4 text-sm py-2 px-4 bg-transparent border border-primary-dark rounded "
                        >
                          <div className="mr-16">
                            <div className="flex">
                              <h1 className="text-semibold">Order No:</h1>
                              <h1 className="font-normal ml-1">
                                {order.orderNo}
                              </h1>
                            </div>
                            <div className="flex text-sm">
                              <h1 className="text-semibold">Date:</h1>
                              <h1 className="font-normal ml-1">
                                {' '}
                                {dateFormat(
                                  order.dateOrdered,
                                  'dd-mm-yyyy'
                                )}{' '}
                              </h1>
                            </div>
                            <div className="flex items-center w-36 overflow-auto">
                              {order.orderItems.map((orderitem) => {
                                return (
                                  <img
                                    key={orderitem._id}
                                    className="h-12 w-10 my-1 mr-2 bg-black"
                                    src={orderitem.product.image}
                                    alt="Product"
                                  />
                                );
                              })}
                            </div>
                          </div>
                          <div className=" flex flex-col my-1 items-center text-white rounded text-sm h-5 w-16 bg-primary-dark">
                            <h1 className="">Delivered</h1>
                          </div>
                          <div className="flex flex-col"></div>
                        </Link>
                      ))
                  )}
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                  index={1}
                  className=" absolute pb-4 transition-all transform flex flex-col"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName=" opacity-0 -translate-x-2"
                >
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : (
                    orders
                      .filter((order) => order.status === 'closed')
                      .map((order) => (
                        <Link
                          key={order._id}
                          to={`${url}/${order.orderNo}`}
                          className=" flex justify-between mb-4 text-sm py-2 px-4 bg-transparent border border-primary-dark rounded "
                        >
                          <div className="mr-16">
                            <div className="flex">
                              <h1 className="text-semibold">Order No:</h1>
                              <h1 className="font-normal ml-1">
                                {order.orderNo}
                              </h1>
                            </div>
                            <div className="flex text-sm">
                              <h1 className="text-semibold">Date:</h1>
                              <h1 className="font-normal ml-1">
                                {' '}
                                {dateFormat(
                                  order.dateOrdered,
                                  'dd-mm-yyyy'
                                )}{' '}
                              </h1>
                            </div>
                            <div className="flex items-center w-36 overflow-auto">
                              {order.orderItems.map((orderitem) => {
                                return (
                                  <img
                                    key={orderitem._id}
                                    className="h-12 w-10 my-1 mr-2 bg-black"
                                    src={orderitem.product.image}
                                    alt="Product"
                                  />
                                );
                              })}
                            </div>
                          </div>
                          <div className=" flex flex-col my-1 items-center text-white rounded text-sm h-5 w-16 bg-primary-dark">
                            <h1 className="">Delivered</h1>
                          </div>
                          <div className="flex flex-col"></div>
                        </Link>
                      ))
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

export default MobileOrders;
