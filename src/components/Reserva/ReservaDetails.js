import React from 'react';

const ReservaDetails = ({ reserva, onClose }) => {
  // Verificar se os dados estão definidos
  if (!reserva || !reserva.produto) {
    return (
      <div className="container mt-4 p-4 border rounded bg-light">
        <h2 className="text-center mb-4">Detalhes da Reserva</h2>
        <p>Dados da reserva não disponíveis.</p>
        <button className="btn btn-secondary w-100 mt-3" onClick={onClose}>
          Fechar
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <h2 className="text-center mb-4">Detalhes da Reserva</h2>
      <p><strong>ID da Reserva:</strong> {reserva.id}</p>
      <p><strong>Produto:</strong> {reserva.produto.nome}</p>
      <p><strong>Status:</strong> {reserva.status}</p>
      <button className="btn btn-secondary w-100 mt-3" onClick={onClose}>
        Fechar
      </button>
    </div>
  );
};

export default ReservaDetails;
