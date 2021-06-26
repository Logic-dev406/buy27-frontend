import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MobileOrder from '../../sections/PreviousOrder/MobileOrders';
import DesktopOrder from '../../sections/PreviousOrder/DesktopOrders';
import { useSelector, useDispatch } from 'react-redux';

//Action
import { getUserOrder as getuserorder } from '../../redux/actions/orderAction';

export const PreviousOrders = () => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setisMobile(window.matchMedia('(max-width:768px)').matches);
    });
  });

  const dispatch = useDispatch();

  //Add error pop up
  const getUserOrder = useSelector((state) => state.orderInfo);
  const { order } = getUserOrder;

  console.log(order);

  useEffect(() => {
    dispatch(getuserorder());
  }, []);

  let { path, url } = useRouteMatch();

  return (
    <div>
      {isMobile ? (
        <MobileOrder path={path} url={url} />
      ) : (
        <DesktopOrder path={path} url={url} />
      )}
    </div>
  );
};

export default PreviousOrders;
