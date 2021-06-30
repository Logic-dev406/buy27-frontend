import React, { useState, useEffect } from 'react';
import DesktopOrderDetails from '../../sections/OrderDetails/DesktopOrderDetails';
import MobileOrderDetails from '../../sections/OrderDetails/MobileOrderDetails';
import { useSelector } from 'react-redux';

//Action
import { getSingleOrder as getsingleorder } from '../../redux/actions/orderAction';

const OrderDetails = ({ match }) => {
  console.log(match);
  const [isMobile, setisMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setisMobile(window.matchMedia('(max-width:768px)').matches);
    });
  });

  const getSingleOrder = useSelector((state) => state.orderInfo);
  const { order, error, loading } = getSingleOrder;

  return (
    <div>
      {isMobile ? (
        <MobileOrderDetails
          loading={loading}
          error={error}
          order={order}
          getsingleorder={getsingleorder}
        />
      ) : (
        <DesktopOrderDetails
          loading={loading}
          error={error}
          order={order}
          getsingleorder={getsingleorder}
        />
      )}
    </div>
  );
};

export default OrderDetails;
