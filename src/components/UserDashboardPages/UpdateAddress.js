import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validate from '../../helper/validator';

import { UpdateProfile } from '../../redux/actions/authAction';

export const UpdateAddress = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [values, setvalues] = useState({
    firstName: user.firstName,
    phone: user.phone,
    state: user.state || 'select',
    lastName: user.lastName,
    lga: user.lga || 'select',
    city: user.city,
    direction: user.direction,
    street: user.street,
  });

  const dispatch = useDispatch();

  const loaduser = useSelector((state) => state.auth);
  const { loading } = loaduser;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setErrors(validate(values));
    if (
      values.firstName.length === 0 ||
      values.phone.length === 0 ||
      values.state.length === 0 ||
      values.lastName.length === 0 ||
      values.lga.length === 0 ||
      values.city.length === 0 ||
      values.street.length === 0
    ) {
      return null;
    }
    dispatch(UpdateProfile(values));
    setvalues({
      firstName: user.firstName,
      phone: user.phone,
      state: user.state,
      lastName: user.lastName,
      lga: user.lga,
      city: user.city,
      direction: user.direction,
      street: user.street,
    });
    history.push('/Dashboard/Delivery Address');
  };

  return (
    <div>
      <div className="bg-white pt-4 h-full md:h-screen px-4 md:px-8 rounded text-primary-dark">
        <Link
          className=" flex w-20 justify-center text-sm font-semibold bg-transparent hover:bg-primary-dark border border-primary-dark text-primary-dark hover:text-white rounded px-2 py-2 "
          to="/Dashboard/Delivery Address"
        >
          <h1>Cancel</h1>
        </Link>
        <div className="border-b  mt-3 mb-4 md:mb-8"></div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col mr-0 md:mr-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={handleInput}
                type="text"
                name="firstName"
                value={values.firstName}
                placeholder="Enter First Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 h-10 md:h-12 w-72 md:w-96"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm ">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="phone">Mobile Number</label>
              <input
                onChange={handleInput}
                type="number"
                name="phone"
                value={values.phone}
                placeholder="Enter Phone Number"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm ">{errors.phone}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="direction">Direction (Optional)</label>
              <input
                onChange={handleInput}
                type="text"
                name="direction"
                value={values.direction}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>

            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="State">State</label>
              <select
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                onChange={handleInput}
                name="state"
                value={values.state}
              >
                <option value="Abuja">Abuja</option>
              </select>
              {errors.State && (
                <p className="text-red-500 text-sm ">{errors.State}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col ml-0 md:ml-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={handleInput}
                type="text"
                name="lastName"
                value={values.lastName}
                placeholder="Enter Last Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm ">{errors.lastName}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="city">City</label>
              <input
                onChange={handleInput}
                type="text"
                name="city"
                value={values.city}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.city && (
                <p className="text-red-500 text-sm ">{errors.city}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8 ">
              <label htmlFor="street">Street Address</label>
              <input
                onChange={handleInput}
                type="text"
                name="street"
                value={values.street}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.street && (
                <p className="text-red-500 text-sm ">{errors.street}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="Lga">LGA</label>
              <select
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
                onChange={handleInput}
                name="lga"
                value={values.lga}
              >
                <option value="Abuja Municiple">Abuja Municiple</option>
                <option value="Buari">Buari</option>
                <option value="kuje">Kuje</option>
                <option value="Gwagwalada">Gwagwalada</option>
                <option value="kwali">kwali</option>
                <option value="Abaji">Abaji</option>
              </select>
              {errors.lga && (
                <p className="text-red-500 text-sm ">{errors.lga}</p>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary-dark py-2 px-10 mb-4 rounded text-white focus:outline-none"
        >
          {loading ? 'Loading...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default UpdateAddress;
