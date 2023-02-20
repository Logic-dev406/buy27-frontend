import React from 'react';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import slider1 from '../../assets/images/m1.jpeg';
import slider2 from '../../assets/images/slider-2.jpg';
import slider3 from '../../assets/images/slider-3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center mx-5 my-4 md:my-8">
        <Carousel
          arrows={true}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={8000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className=" h-56 md:h-80 lg:h-96 w-full md:w-full lg:w-5/12 mr-0 md:mr-0 lg:mr-5 rounded focus:outline-none z-0 "
        >
          <img
            src={slider1}
            alt="slider1"
            className=" w-full h-full rounded bg-contain mr-0 md:mr-12 md:bg-cover bg-no-repeat bg-center"
          />
          <img
            src={slider2}
            alt="slider2"
            className=" w-full h-full rounded bg-contain mr-0 md:mr-12 md:bg-cover bg-no-repeat bg-center"
          />
          <img
            src={slider3}
            alt="slider3"
            className=" w-full h-full rounded bg-contain mr-0 md:mr-12 md:bg-cover bg-no-repeat bg-center"
          />
        </Carousel>
        <div className="flex grid grid-cols-2 gap-y-4 md:gap-y-8 gap-x-4 md:gap-x-4 mt-4 md:mt-0 ">
          <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-light rounded-md overflow-hidden">
            <img
              alt="banner"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-modern-sale-clothing-ad-design-template-be2b43d97d7d625acf836a41576cd3ff_screen.jpg?ts=1609619222"
            />
          </div>
          <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-light rounded-md overflow-hidden">
            <img
              alt="banner"
              src="https://images.all-free-download.com/images/graphiclarge/sales_banner_fashion_clothes_design_elements_texts_decor_6834779.jpg"
            />
          </div>
          <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-dark rounded-md overflow-hidden">
            <img
              alt="banner"
              src="https://graphicriver.img.customer.envatousercontent.com/files/221873393/590x.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=9bdda0e66c345c4e6ca13b1fc88164aa"
            />
          </div>
          <div className="h-36 md:h-44 w-36 md:w-44 bg-primary-dark rounded-md overflow-hidden">
            <img
              alt="banner"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6f533123229541.60ea072c92bbf.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-72 mb-4 md:mb-8">
        <div className="flex items-center">
          <LocalShippingOutlinedIcon className="text-primary-light" />{' '}
          <div className="ml-3 md:ml-5">
            <h1 className="text-primary-dark font-bold text-sm">
              Free Shipping Worldwild
            </h1>{' '}
            <h1 className="text-xs md:text-sm text-gray-500">
              We diliver to your door step worldwild for free.
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <HeadsetMicOutlinedIcon className="text-primary-light" />
          <div className="ml-3 md:ml-5">
            <h1 className="text-primary-dark font-bold text-sm">
              24/7 Customer Service
            </h1>{' '}
            <h1 className="text-xs md:text-sm text-gray-500">
              We make sure you get the best user experience.
            </h1>
          </div>
        </div>
        <div className="flex items-center ">
          <AttachMoneyOutlinedIcon className="text-primary-light" />{' '}
          <div className="ml-3 md:ml-5">
            <h1 className="text-primary-dark font-bold text-sm">
              Money Back Garantee
            </h1>{' '}
            <h1 className="text-xs md:text-sm text-gray-500">
              Checkout our return policy for more info.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
