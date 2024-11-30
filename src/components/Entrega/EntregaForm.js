import React, { useState } from 'react';
import { EntregaService } from '../../services/EntregaService';

const EntregaForm = ({ reservaId }) => {
  const [enderecoEntrega, setEnderecoEntrega] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await EntregaService.criarEntrega(reservaId, enderecoEntrega); 
      setMessage('Entrega será realizada!');
    } catch (error) {
      setMessage('Erro ao criar entrega: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Entrega</h2>
      <p><strong>Reserva ID:</strong> {reservaId}</p>
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
      <button type="submit" className="btn btn-primary w-100">
        Finalizar Entrega
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
};

export default EntregaForm;
