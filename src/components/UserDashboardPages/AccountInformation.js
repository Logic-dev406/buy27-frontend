import React, { useState } from "react";
import validate from "../../helper/validator";

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
    console.log(values);
  };

  return (
    <div>
      <div className="bg-white pt-4 h-full md:h-screen px-4 md:px-8 rounded text-primary-dark">
        <h1 className="flex text-sm font-semibold py-2 items-center">
          <p>My Account Information</p>
        </h1>
        <div className="border-b  mt-3 mb-4 md:mb-8"></div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col mr-0 md:mr-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="firstname">First Name</label>
              <input
                onChange={handleInput}
                id="firstname"
                type="text"
                name="firstname"
                value={values.firstname}
                placeholder="Enter First Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4 h-10 md:h-12 w-72 md:w-96"
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm ">{errors.firstname}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8 ">
              <label htmlFor="emailaddress">Email Address</label>
              <input
                onChange={handleInput}
                id="emailaddress"
                type="email"
                name="emailaddress"
                value={values.emailaddress}
                placeholder="Enter Email Address"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.emailaddress && (
                <p className="text-red-500 text-sm ">{errors.emailaddress}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="mobilenumber">Mobile Number</label>
              <input
                onChange={handleInput}
                id="mobilenumber"
                type="number"
                name="mobilenumber"
                value={values.mobilenumber}
                placeholder="Enter Mobile Number"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.mobilenumber && (
                <p className="text-red-500 text-sm ">{errors.mobilenumber}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="direction">Direction</label>
              <input
                onChange={handleInput}
                id="direction"
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
                <option defaultValue>select</option>
                <option value="Abuja">Abuja</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm ">{errors.state}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col ml-0 md:ml-5">
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="lastname">Last Name</label>
              <input
                onChange={handleInput}
                id="lastname"
                type="text"
                name="lastname"
                value={values.lastname}
                placeholder="Enter Last Name"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm ">{errors.lastname}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8">
              <label htmlFor="city">City</label>
              <input
                onChange={handleInput}
                id="city"
                type="text"
                name="city"
                value={values.city}
                placeholder="Enter City"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.city && (
                <p className="text-red-500 text-sm ">{errors.city}</p>
              )}
            </div>
            <div className="flex flex-col mb-4 md:mb-8 ">
              <label htmlFor="streetaddress">Street Address</label>
              <input
                onChange={handleInput}
                id="streetaddress"
                type="text"
                name="streetaddress"
                value={values.streetaddress}
                placeholder="Enter Street Address"
                className="focus: outline-none bg-transparent border border-primary-dark rounded pl-4  h-10 md:h-12 w-72 md:w-96"
              />
              {errors.streetaddress && (
                <p className="text-red-500 text-sm ">{errors.streetaddress}</p>
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
                <option defaultValue>select</option>
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
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountInformation;
