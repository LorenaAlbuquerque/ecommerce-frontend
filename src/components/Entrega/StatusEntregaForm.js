import React, { useState } from 'react';
import { EntregaService } from '../../services/EntregaService';

const StatusEntregaForm = ({ entrega, onAtualizarEntrega }) => {
  const [novoStatus, setNovoStatus] = useState(entrega.statusEntrega);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const entregaAtualizada = await EntregaService.atualizarStatusEntrega(entrega.id, novoStatus);
      setMessage('Status atualizado com sucesso!');
      onAtualizarEntrega(entregaAtualizada); 
    } catch (error) {
      setMessage('Erro ao atualizar status: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Atualizar Status da Entrega</h2>
      <p><strong>ID da Entrega:</strong> {entrega.id}</p>
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
        Atualizar
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
};

export default StatusEntregaForm;
