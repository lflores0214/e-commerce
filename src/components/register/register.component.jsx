import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import FormInput from "../form-input/form-input.component";

import { registerStart } from "../../redux/user/user.actions";
import { RegisterContainer, RegisterTitle } from "./register.styles";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    const { registerStart } = this.props;
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    } else {
      registerStart(email, password, displayName);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <RegisterContainer>
        <RegisterTitle>I do not have a account</RegisterTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </RegisterContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  registerStart: (email, password) =>
    dispatch(registerStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(Register);
