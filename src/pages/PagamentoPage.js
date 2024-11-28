import React from 'react';
import PagamentoForm from '../components/Pagamento/PagamentoForm';

const PagamentoPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <PagamentoForm />
        </div>
      </div>
    </div>
  );
};

export default PagamentoPage;
