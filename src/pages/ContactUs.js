import React, { useState } from 'react';

function ContactUs() {
  const [values, setvalues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center md:px-52 py-8 md:py-28 bg-gray-100">
      <h1 className="text-3xl font-bold mb-10">Contact Us</h1>
      <div className="flex w-full items-center justify-center mb-5">
        <div className="flex flex-col w-full ">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleInput}
            // onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            type="text"
            name="firstName"
            value={values.firstName}
            placeholder="Enter your First Name"
            className="focus: outline-none bg-transparent border border-primary-dark pl-4 h-10 md:h-12 w-72 md:w-full"
          />
        </div>
        <div className="flex flex-col w-full mx-5">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleInput}
            // onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            type="text"
            name="lastName"
            value={values.lastName}
            placeholder="Enter your Last Name"
            className="focus: outline-none bg-transparent border border-primary-dark pl-4 h-10 md:h-12 w-72 md:w-full"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={handleInput}
            // onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter your Email Address"
            className="focus: outline-none bg-transparent border border-primary-dark pl-4 h-10 md:h-12 w-72 md:w-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <label htmlFor="message">Message</label>
        <textarea
          style={{
            resize: 'none',
          }}
          onChange={handleInput}
          // onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          type="text"
          name="message"
          value={values.message}
          placeholder="Enter your Message"
          className="focus: outline-none bg-transparent border border-primary-dark px-2 h-10 md:h-28 w-72 md:w-full"
        />
      </div>
      <button className="h-10 w-28 rounded bg-primary-light hover:bg-primary-dark font-normal text-sm text-white mt-10">
        SEND
      </button>
    </div>
  );
}

export default ContactUs;
