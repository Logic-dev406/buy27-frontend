import React, { useState } from 'react';
import validate from '../../helper/validator';
import { useSelector, useDispatch } from 'react-redux';

import { UpdateProfile } from '../../redux/actions/authAction';

export const AccountInformation = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [values, setvalues] = useState({
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    currentPassword: '',
    NewPassword: '',
  });

  const dispatch = useDispatch();
  const loaduser = useSelector((state) => state.auth);
  const { loading } = loaduser;

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setErrors(validate(values));
    if (values.firstName.length === 0 || values.lastName.length === 0) {
      return null;
    }
    dispatch(UpdateProfile(values));
    setvalues({
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      currentPassword: '',
      NewPassword: '',
    });
  };

  return (
    <div>
      <div className="bg-white pt-4 h-full md:h-screen px-4 md:px-8 rounded text-primary-dark">
        <h1 className="flex text font-semibold py-2 items-center">
          <p>Account Information</p>
        </h1>
        <div className="border-b  mt-3 mb-4 md:mb-8"></div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col mr-0 md:mr-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="firstname">First Name</label>
              <input
                onChange={handleInput}
                type="text"
                name="firstName"
                value={user ? values.firstName : ''}
                placeholder="Enter First Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 h-10 md:h-12 w-72 md:w-96"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm ">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8 ">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={handleInput}
                type="email"
                name="email"
                value={user ? user.email : ''}
                placeholder="Enter Email Address"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="newPassword">New Password</label>
              <input
                onChange={handleInput}
                type="password"
                name="newPassword"
                value={values.NewPassword}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
          </div>
          <div className="flex flex-col ml-0 md:ml-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={handleInput}
                type="text"
                name="lastName"
                value={user ? values.lastName : ''}
                placeholder="Enter Last Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm ">{errors.lastName}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                onChange={handleInput}
                type="password"
                name="currentPassword"
                value={values.currentPassword}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
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

export default AccountInformation;
