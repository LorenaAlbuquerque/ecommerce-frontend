import React from 'react';
import CadastroForm from '../components/User/CadastroForm';

const CadastroPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <CadastroForm />
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;
