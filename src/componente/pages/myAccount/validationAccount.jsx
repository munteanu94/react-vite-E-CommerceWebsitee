import * as yup from "yup";

export const userAccount = yup.object().shape({
  firstName: yup.string().required("Your Fist Name is Required !"),
  lastName: yup.string().required("Your Last Name is Required !"),
  email: yup.string().email().required("Your Email is Required !"),
  address: yup.string().required("Your Address is Required !"),
  Password: yup.string().min(4).max(10).required("Password is Required !"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Password Don't Match")
    .required("Confirm Password is Required !"),
});
