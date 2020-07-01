import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import Register from "../../components/register/register.component"
import { SignInAndRegisterContainer } from './signin-register.styles';

const SignInAndSignUpPage = () => (
  <SignInAndRegisterContainer>
    <SignIn />
    <Register />
  </SignInAndRegisterContainer>
);

export default SignInAndSignUpPage;