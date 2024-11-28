import React from 'react';
import LoginForm from '../components/User/LoginForm';

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
