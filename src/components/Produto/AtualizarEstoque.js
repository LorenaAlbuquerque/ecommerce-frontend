import React, { useState } from 'react';
import { ProdutoService } from '../../services/ProdutoService';

const AtualizarEstoque = () => {
  const [produtoId, setProdutoId] = useState('');
  const [disponibilidade, setDisponibilidade] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProdutoService.atualizarEstoque(produtoId, disponibilidade);
      setMessage(`Estoque atualizado! Disponibilidade: ${response.disponibilidade}`);
    } catch (error) {
      setMessage('Erro ao atualizar estoque: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2 className="mb-4 text-center">Atualizar Estoque</h2>

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
        <label className="form-label">Disponibilidade:</label>
        <input
          type="checkbox"
          checked={disponibilidade}
          onChange={(e) => setDisponibilidade(e.target.checked)}
          className="form-check-input"
        />
        <label className="form-check-label ms-2">Produto disponível</label>
      </div>

      <button type="submit" className="btn btn-primary">Atualizar Estoque</button>

      {message && (
        <div className="mt-3">
          <p className={message.startsWith('Erro') ? 'text-danger' : 'text-success'}>
            {message}
          </p>
        </div>
      )}
    </form>
  );
};

export default AtualizarEstoque;
