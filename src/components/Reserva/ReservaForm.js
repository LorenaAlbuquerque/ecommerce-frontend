import React, { useState } from 'react';
import { ReservaService } from '../../services/ReservaService';

const ReservaForm = () => {
  const [produtoId, setProdutoId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ReservaService.criarReserva({ produtoId, usuarioId });
      setMessage(`Reserva criada com sucesso! ID: ${response.id}`);
    } catch (error) {
      setMessage('Erro ao criar reserva: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Criar Reserva</h2>
      
      <div className="mb-3">
        <label className="form-label">Produto ID:</label>
        <input
          type="number"
          className="form-control"
          value={produtoId}
          onChange={(e) => setProdutoId(e.target.value)}
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Usuário ID:</label>
        <input
          type="number"
          className="form-control"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary w-100">
        Criar Reserva
      </button>
      
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
};

export default ReservaForm;
