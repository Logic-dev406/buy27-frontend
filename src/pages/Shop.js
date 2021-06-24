import React, { useEffect, useState } from 'react';
import ShopProduct from '../components/Shop/ShopProducts';
import ScrollToTop from '../components/Shop/ScrollToTop';
import { useSelector, useDispatch } from 'react-redux';

//Action
import { getProducts as listProducts } from '../redux/actions/productActions';

const Shop = ({
  searchLoading,
  searchError,
  searchedProducts,
  getSearchedProducts,
}) => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setisMobile(window.matchMedia('(max-width:768px)').matches);
    });
  });

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <div className="flex flex-col bg-gray-100 h-full w-full">
      <div className="flex justify-center mx-0 md:mx-52">
        <div>
          {isMobile ? '' : <div className="h-96 w-72 bg-white mr-5"></div>}
        </div>
        <div className="  bg-transparent md:bg-white">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-2 gap-x-2 md:gap-x-2 py-2 md:py-2 px2 md:px-2 bg-transparent">
            {loading ? (
              <h1>Loading...</h1>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              products.map((product) => (
                <ShopProduct key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
        <div>{isMobile ? '' : <ScrollToTop />}</div>
      </div>
    </div>
  );
};

export default Shop;
