import React, { useEffect, useState } from "react";
import DesktopCart from "../sections/Cart/DesktopCart";
import MobileCart from "../sections/Cart/MobileCart";

export const Cart = ({
  qtyChangeHandler,
  removeFromCartHandler,
  getCartCount,
  getCartTotalPrice,
  cartItems,
}) => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia("(max-width:768px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setisMobile(window.matchMedia("(max-width:768px)").matches);
    });
  });

  return (
    <div>
      {isMobile ? (
        <MobileCart
          cartItems={cartItems}
          qtyChangeHandler={qtyChangeHandler}
          removeFromCartHandler={removeFromCartHandler}
          getCartCount={getCartCount}
          getCartTotalPrice={getCartTotalPrice}
        />
      ) : (
        <DesktopCart
          cartItems={cartItems}
          qtyChangeHandler={qtyChangeHandler}
          removeFromCartHandler={removeFromCartHandler}
          getCartCount={getCartCount}
          getCartTotalPrice={getCartTotalPrice}
        />
      )}
    </div>
  );
};

export default Cart;
