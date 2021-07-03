import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const ShopProducts = ({ product }) => {
  return (
    <div className="  bg-white  * hover:shadow-lg border-0 hover:border-2 ">
      <Link to={`/Shop/${product.slug}`} className="flex flex-col">
        <img
          className="h-40 md:h-48 w-36 md:w-44 "
          src={product.image}
          alt="product"
        />
        <h1 className="text-left text-black text-xs font-semibold h-10 pl-2 pt-2">
          {product.name}
        </h1>

        <h5 className="text-left text-gray-500 text-xs pl-2 font-semibold">
          <NumberFormat
            value={product.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
          />
        </h5>
        <button className="text-sm text-black hover:text-white font-normal md:font-bold bg-transparent hover:bg-primary-dark border border-primary-dark rounded py-2 mx-2 mt-4 mb-2">
          View Product
        </button>
      </Link>
    </div>
  );
};

export default ShopProducts;
