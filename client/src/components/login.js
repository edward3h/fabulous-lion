import React from 'react';
import FaFacebook from "react-icons/lib/fa/facebook-official";

const loginToFacebook = (e) => {
  e.preventDefault();
  window.location = '/auth/login-facebook';
}

const Login = () => (
  <div>
  <h1>Login</h1>
  <button onClick={loginToFacebook}><FaFacebook />Login stuff goes here</button>
  </div>
);

export default Login;