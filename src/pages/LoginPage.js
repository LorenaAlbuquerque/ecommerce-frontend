import React from 'react';
import LoginForm from '../components/User/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <LoginForm />
          <p className="text-center mt-3">
            Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
