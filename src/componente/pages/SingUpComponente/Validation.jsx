export default function Validation(value) {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (value.name === "") {
    errors.name = "Name is Required";
  }
  if (value.number === "") {
    errors.number = "Number is Required";
  }
  if (value.address === "") {
    errors.address = "Address is Required";
  }
  if (value.city === "") {
    errors.city = "City is Required";
  }
  if (value.email === "") {
    errors.email = "Email is Required";
  } else if (!email_pattern.test(value.email)) {
    errors.email = "Email didn't match";
  }

  if (value.password === "") {
    errors.password = "Password is Required";
  } else if (!password_pattern.test(value.password)) {
    errors.password = "Password didn't match";
  }
  return errors;
}
