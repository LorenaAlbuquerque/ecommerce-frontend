import React, { useState } from 'react';
import { ProdutoService } from '../../services/ProdutoService';

const DisponibilidadeProduto = () => {
  const [produtoId, setProdutoId] = useState('');
  const [disponibilidade, setDisponibilidade] = useState(null);
  const [message, setMessage] = useState('');

  const verificarDisponibilidade = async () => {
    try {
      const response = await ProdutoService.verificarDisponibilidade(produtoId);
      setDisponibilidade(response);
      setMessage('');
    } catch (error) {
      setMessage('Erro ao verificar disponibilidade: ' + error.message);
      setDisponibilidade(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Verificar Disponibilidade do Produto</h2>
      
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

      <button onClick={verificarDisponibilidade} className="btn btn-primary">
        Verificar
      </button>

      {disponibilidade !== null && (
        <p className="mt-3">
          {disponibilidade
            ? <span className="text-success">O produto está disponível.</span>
            : <span className="text-danger">O produto não está disponível.</span>
          }
        </p>
      )}

      {message && <div className="mt-3 alert alert-danger">{message}</div>}
    </div>
  );
};

export default DisponibilidadeProduto;
