import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import dateFormat from 'dateformat';
import NumberFormat from 'react-number-format';

const MobileOrderDetails = ({ loading, error, order }) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className=" pb-4 w-full bg-gray-100">
          <div className="flex items-center bg-white py-4 w-screen mb-2 px-4 ">
            <Link to="/Dashboard/My Orders">
              <ArrowBackIcon fontSize="small" />
            </Link>
            <h1 className="font-semibold text- ml-4">OrderDetails</h1>
          </div>
          <div className=" bg-white text-sm px-4 py-2">
            <div className="flex items-center mb-1 font-semibold">
              <h1>Order no:</h1>
              <h1>{order.orderNo}</h1>
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
          </div>
          <h1 className=" text-sm py-2 px-4 font-semibold">
            ITEMS IN YOUR ORDER
          </h1>
          {order.orderItems
            ? order.orderItems.map((orderitem) => {
                return (
                  <div
                    key={orderitem.id}
                    className=" w-screen mb-4 px-4 py-2 bg-white"
                  >
                    <h1 className="flex flex-col mb-2 items-center text-white rounded text-sm w-16 bg-gray-500">
                      {order.status ? order.status.toUpperCase() : ''}
                    </h1>
                    <div className="border-b"></div>
                    <div className="flex items-center mb-8 ">
                      <Link to="#" className="mr-4 mt-2">
                        <img
                          className="h-20 w-16 bg-black rounded"
                          src={orderitem.product.image}
                          alt="Product"
                        />
                      </Link>
                      <div>
                        <p>{orderitem.product.name}</p>
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
                );
              })
            : ''}
          <div className=" bg-white text-sm px-4 py-2 mb-4">
            <h1 className="border-b  py-1">PAYMENT INFORMATION</h1>
            <h1 className="py-1 ">Payment Method</h1>
            <h1 className="  pb-2 text-sm font-normal">
              Stay Safe, pay with buy27
            </h1>
            <h1 className="py-1 ">Payment Details</h1>
            <h1 className="  text-sm font-normal">
              <NumberFormat
                value={order.totalPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₦'}
              />
            </h1>
            <h1 className="  text-sm font-normal">Shipping fee: 0.00</h1>
            <h1 className="  text-sm font-normal">
              <NumberFormat
                value={order.totalPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₦'}
              />
            </h1>
          </div>
          <div className=" bg-white text-sm px-4 py-2">
            <h1 className="border-b py-1">Delivery INFORMATION</h1>
            <h1 className="py-1">Delivery Method</h1>
            <h1 className=" pb-2 text-sm font-normal">
              Standard door delivery
            </h1>
            <h1 className="py-1">Shipping Address</h1>
            <h1 className=" text-sm font-normal">
              {order.firstName} {order.lastName}
            </h1>
            <h1 className=" text-sm font-normal">{order.street}</h1>
            <h1 className=" text-sm font-normal">{order.lga}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileOrderDetails;
