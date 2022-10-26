import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';

//Action
import { getFeaturedProducts as featuredProducts } from '../../redux/actions/productActions';

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const getFeaturedProducts = useSelector((state) => state.getFeaturedProducts);
  const { products, loading, error } = getFeaturedProducts;

  useEffect(() => {
    dispatch(featuredProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col items-center text-center ">
        <div>
          <h1 className="text-primary-dark font-bold text-3xl">
            Featured Product
          </h1>
          <h1 className="text-gray-500 text-sm">
            These are some of our top best selling products on our site.
          </h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5 bg-transparent p-0 md:p-5 mt-5">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            products.map((product) => (
              <Link
                to={`/Shop/${product.slug}`}
                key={product.id}
                className="bg- * hover:shadow-lg h-auto w-36 md:w-44 pb-4 "
              >
                <img
                  className="h-40 md:h-48 w-40 md:w-48 "
                  src={product.image}
                  alt="product"
                />
                <h1 className="text-left text-black text-xs font-semibold pl-2 pt-2">
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
              </Link>
            ))
          )}
        </div>
        <a
          href="/shop"
          className="flex flex-col mt-5 md:mt-8 mb-5 bg-primary-dark h-10 w-40 items-center justify-center"
        >
          <h1 className="text-white text-center text-sm">VIEW ALL PRODUCTS</h1>
        </a>
        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/flat-geometric-fashion-youtube-thumbnail_23-2148918593.jpg?w=2000&t=st=1666798248~exp=1666798848~hmac=c9327a9aacb55c765c45aa611208b367126819d4e0e3f7cc8786a4c486c37ad7")`,
          }}
          className="bg-gray-500 bg-top bg-no-repeat bg-cover h-52 md:h-72 w-full md:w-2/3 mb-8"
        ></div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
