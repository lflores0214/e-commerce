import React, { useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import FormInput from "../form-input/form-input.component";

import { registerStart } from "../../redux/user/user.actions";
import { RegisterContainer, RegisterTitle } from "./register.styles";

const Register = ({ registerStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    } else {
      registerStart(email, password, displayName);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <RegisterContainer>
      <RegisterTitle>I do not have a account</RegisterTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </RegisterContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerStart: (email, password) =>
    dispatch(registerStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(Register);
