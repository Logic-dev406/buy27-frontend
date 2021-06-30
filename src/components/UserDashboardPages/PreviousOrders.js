import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MobileOrder from '../../sections/PreviousOrder/MobileOrders';
import DesktopOrder from '../../sections/PreviousOrder/DesktopOrders';
import { useSelector, useDispatch } from 'react-redux';

//Action
import { getUserOrder as getuserorder } from '../../redux/actions/orderAction';

const PreviousOrders = () => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setisMobile(window.matchMedia('(max-width:768px)').matches);
    });
  });

  const dispatch = useDispatch();

  const getUserOrder = useSelector((state) => state.getOrders);
  const { orders, error, loading } = getUserOrder;

  useEffect(() => {
    dispatch(getuserorder());
  }, []);

  let { path, url } = useRouteMatch();

  return (
    <div>
      {isMobile ? (
        <MobileOrder
          orders={orders}
          error={error}
          loading={loading}
          path={path}
          url={url}
        />
      ) : (
        <DesktopOrder
          orders={orders}
          error={error}
          loading={loading}
          path={path}
          url={url}
        />
      )}
    </div>
  );
};

export default PreviousOrders;
