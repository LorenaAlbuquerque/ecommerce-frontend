import React, { useState } from 'react';
import { EntregaService } from '../../services/EntregaService';

const StatusEntregaForm = () => {
  const [entregaId, setEntregaId] = useState('');
  const [novoStatus, setNovoStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await EntregaService.atualizarStatusEntrega(entregaId, novoStatus);
      setMessage(`Status atualizado! Status atual: ${response.statusEntrega}`);
    } catch (error) {
      setMessage('Erro ao atualizar status: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Atualizar Status da Entrega</h2>
      <div className="mb-3">
        <label className="form-label">Entrega ID:</label>
        <input
          type="number"
          className="form-control"
          value={entregaId}
          onChange={(e) => setEntregaId(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Novo Status:</label>
        <select
          className="form-select"
          value={novoStatus}
          onChange={(e) => setNovoStatus(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="AGUARDANDO">Aguardando</option>
          <option value="A_CAMINHO">A Caminho</option>
          <option value="ENTREGUE">Entregue</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Atualizar Status
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
};

export default StatusEntregaForm;