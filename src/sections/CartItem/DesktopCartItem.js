import React from "react";
import NumberFormat from "react-number-format";

export const DesktopCartItem = ({
  item,
  qtyChangeHandler,
  removeFromCartHandler,
}) => {
  return (
    <div>
      <div className="flex justify-between px-5 py-6 w-full bg-white border-b">
        <a href={`/Shop/${item.slug}`} className="flex">
          <img src={item.image} alt="item" className="w-10 mr-4" />
          <h1 className="font-semibold text-primary-dart truncate">
            {item.name}
          </h1>
        </a>
        <div>
          <select
            onChange={(e) => qtyChangeHandler(item.slug, e.target.value)}
            value={item.qty}
            className="flex items-center justify-between * hover:shadow-lg px-2  h-8 w-20 bg-transparent border rounded ml-5 focus:outline-none"
          >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className="font-bold text-lg text-primary-dark">
            <NumberFormat
              value={item.price * item.qty}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </h1>
          <h1 className="text-xs text-gray-500 font-semibold">
            {
              <NumberFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
              />
            }{" "}
            X {item.qty} {item.qty > 1 ? "items" : "item"}
          </h1>
        </div>
        <div>
          <button
            onClick={() => removeFromCartHandler(item.product)}
            className="text-red-500 text-sm font-semibold focus:outline-none"
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopCartItem;
