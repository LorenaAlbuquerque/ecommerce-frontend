import React, { useState } from 'react';
import { EntregaService } from '../../services/EntregaService';

const EntregaForm = () => {
  const [reservaId, setReservaId] = useState('');
  const [enderecoEntrega, setEnderecoEntrega] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await EntregaService.criarEntrega(reservaId, enderecoEntrega);
      setMessage(`Entrega criada com sucesso! ID: ${response.id}`);
    } catch (error) {
      setMessage('Erro ao criar entrega: ' + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <h2 className="text-center mb-4">Criar Entrega</h2>
        <div className="mb-3">
          <label className="form-label">Reserva ID:</label>
          <input
            type="number"
            className="form-control"
            value={reservaId}
            onChange={(e) => setReservaId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Endereço de Entrega:</label>
          <input
            type="text"
            className="form-control"
            value={enderecoEntrega}
            onChange={(e) => setEnderecoEntrega(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Criar Entrega</button>
        {message && <p className="mt-3 alert alert-info">{message}</p>}
      </form>
    </div>
  );
};

export default EntregaForm;
