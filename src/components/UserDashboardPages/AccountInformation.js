import React, { useState } from "react";
// import validate from "../../helper/validator";

export const AccountInformation = () => {
  const [values, setvalues] = useState({
    firstname: "",
    mobilenumber: "",
    phone: "",
    emailaddress: "",
    state: "",
    lastname: "",
    lga: "",
    city: "",
    direction: "",
    streetaddress: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  // const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // setErrors(validate(values));
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
                name="firstname"
                value={values.firstname}
                placeholder="Enter First Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 h-10 md:h-12 w-72 md:w-96"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8 ">
              <label htmlFor="emailaddress">Email Address</label>
              <input
                onChange={handleInput}
                type="email"
                name="emailaddress"
                value={user ? user.email : null}
                placeholder="Enter Email Address"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="mobilenumber">New Password</label>
              <input
                onChange={handleInput}
                type="text"
                name="newpassword"
                value={values.mobilenumber}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
          </div>
          <div className="flex flex-col ml-0 md:ml-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="lastname">Last Name</label>
              <input
                onChange={handleInput}
                type="text"
                name="lastname"
                value={values.lastname}
                placeholder="Enter Last Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="city">Current Password</label>
              <input
                onChange={handleInput}
                type="text"
                name="currentPassword"
                value={values.city}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-8 ">
              <label htmlFor="streetaddress">Confirm Password</label>
              <input
                onChange={handleInput}
                type="text"
                name="confrimPassword"
                value={values.streetaddress}
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary-dark py-2 px-10 mb-4 rounded text-white focus:outline-none"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountInformation;
