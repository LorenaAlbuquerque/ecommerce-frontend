import React, { useState } from 'react';
import PagamentoForm from '../components/Pagamento/PagamentoForm';
import EntregaForm from '../components/Entrega/EntregaForm';

const PagamentoPage = () => {
  const [reservaId, setReservaId] = useState(null); 

 
  const handlePagamentoFinalizado = (id) => {
    setReservaId(id); 
  };

  return (
    <div className="container mt-5">
      {!reservaId ? (
        <PagamentoForm onPagamentoFinalizado={handlePagamentoFinalizado} />
      ) : (
        <EntregaForm reservaId={reservaId} />
      )}
    </div>
  );
};

export default PagamentoPage;
