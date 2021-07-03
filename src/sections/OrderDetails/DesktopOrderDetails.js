import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import NumberFormat from 'react-number-format';

const DesktopOrderDetails = ({ loading, error, order }) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="h-screen w-full bg-white px-2">
          <div className="flex items-center py-4 w-96 px-4 border-b">
            <Link to="/Dashboard/My Orders">
              <ArrowBackIcon />
            </Link>
            <h1 className="font-semibold text-lg ml-4">OrderDetails</h1>
          </div>
          <div className="border-b px-4 py-2">
            <div className="flex items-center mb-1 font-semibold">
              <h1 className="mr-1">Order no:</h1>
              <h1> {order.orderNo} </h1>
            </div>
            <h1>
              {' '}
              {order.orderItems ? (
                order.orderItems.length > 1 ? (
                  <div>{order.orderItems.length} items</div>
                ) : (
                  <div>{order.orderItems.length} item</div>
                )
              ) : (
                ''
              )}{' '}
            </h1>
            <h1>Placed on {dateFormat(order.dateOrdered, 'dd-mm-yyyy')}</h1>
            <h1>
              Total price:{' '}
              <NumberFormat
                value={order.totalPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₦'}
              />
            </h1>
            <h1 className="flex flex-col  items-center text-white rounded text-sm w-16 bg-gray-500">
              {order.status ? order.status.toUpperCase() : ''}
            </h1>
          </div>
          <h1 className="py-2 px-4 font-semibold">ITEMS IN YOUR ORDER</h1>
          {order.orderItems
            ? order.orderItems.map((orderitem) => {
                return (
                  <div
                    key={orderitem.product.id}
                    className=" flex justify-between px-4 mb-4 bg-transparent border mx-4 rounded"
                  >
                    <div className=" my-4">
                      <div className="flex items-center ">
                        <Link to="#" className="mr-4 mt-2">
                          <img
                            className="h-20 w-16 bg-black"
                            src={orderitem.product.image}
                            alt="Product"
                          />
                        </Link>
                        <div>
                          <Link to="#" className="mr-20">
                            {orderitem.product.name}
                          </Link>
                          <h1> qty: {orderitem.quantity}</h1>
                          <h1>
                            <NumberFormat
                              value={orderitem.product.price}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'₦'}
                            />
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Link
                        to="#"
                        className=" bg-primary-dark text-white py-1 px-4 rounded"
                      >
                        BUY AGAIN
                      </Link>
                    </div>
                  </div>
                );
              })
            : ''}
          <div className="flex my-2 mx-4 py-4">
            <div className=" bg-transparent pb-2 mr-2 w-96 border rounded">
              <h1 className="border-b pl-4 py-1">PAYMENT INFORMATION</h1>
              <h1 className="py-1 pl-4">Payment Method</h1>
              <h1 className=" pl-4 pb-2 text-sm font-normal">
                Stay Safe, pay with buy27
              </h1>
              <h1 className="py-1 pl-4">Payment Details</h1>
              <h1 className=" pl-4 text-sm font-normal">
                Items total:{' '}
                <NumberFormat
                  value={order.totalPrice}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
                />
              </h1>
              <h1 className=" pl-4 text-sm font-normal">Shipping fee: 0.00</h1>
              <h1 className=" pl-4 text-sm font-normal">
                Total:{' '}
                <NumberFormat
                  value={order.totalPrice}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
                />
              </h1>
            </div>
            <div className=" bg-transparent ml-2 pb-2 w-96 border rounded">
              <h1 className="border-b pl-4 py-1">DELIVERY INFORMATION</h1>
              <h1 className="py-1 pl-4">Delivery Method</h1>
              <h1 className=" pl-4 pb-2 text-sm font-normal">
                Standard door delivery
              </h1>
              <h1 className="py-1 pl-4">Shipping Address</h1>
              <h1 className=" pl-4 text-sm font-normal">
                {order.firstName} {order.lastName}
              </h1>
              <h1 className=" pl-4 text-sm font-normal"> {order.street} </h1>
              <h1 className=" pl-4 text-sm font-normal">{order.lga}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopOrderDetails;
