export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name required";
  }

  if (!values.phone) {
    errors.phone = "Mobile Number required";
  }

  if (!values.state) {
    errors.state = "State is required";
  }

  if (!values.lga) {
    errors.lga = " Local Goverment Area is required";
  }

  if (!values.city) {
    errors.city = "City is required";
  }

  if (!values.streetaddress) {
    errors.streetaddress = "Street Address is required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 or more characters";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
