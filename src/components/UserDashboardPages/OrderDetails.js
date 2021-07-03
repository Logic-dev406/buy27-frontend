import React, { useState, useEffect } from 'react';
import DesktopOrderDetails from '../../sections/OrderDetails/DesktopOrderDetails';
import MobileOrderDetails from '../../sections/OrderDetails/MobileOrderDetails';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

//Action
import { getSingleOrder as getsingleorder } from '../../redux/actions/orderAction';

const OrderDetails = () => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setisMobile(window.matchMedia('(max-width:768px)').matches);
    });
  });

  const { orderNo } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsingleorder(orderNo));
  }, [getsingleorder]);

  const getSingleOrder = useSelector((state) => state.getSingleOrder);
  const { order, error, loading } = getSingleOrder;

  // console.log(order.orderItems.lenght || '');

  return (
    <div>
      {isMobile ? (
        <MobileOrderDetails
          loading={loading}
          error={error}
          order={order}
          orderNo={orderNo}
        />
      ) : (
        <DesktopOrderDetails
          loading={loading}
          error={error}
          order={order}
          orderNo={orderNo}
        />
      )}
    </div>
  );
};

export default OrderDetails;
