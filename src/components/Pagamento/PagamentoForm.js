import React, { useState } from 'react';
import { PagamentoService } from '../../services/PagamentoService';

const PagamentoForm = () => {
  const [reservaId, setReservaId] = useState('');
  const [valor, setValor] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await PagamentoService.criarPagamento({ reservaId, valor, formaPagamento });
      setMessage(`Pagamento criado com sucesso! ID: ${response.id}`);
    } catch (error) {
      setMessage('Erro ao criar pagamento: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Criar Pagamento</h2>
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
        <label className="form-label">Valor:</label>
        <input
          type="number"
          className="form-control"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Forma de Pagamento:</label>
        <select
          className="form-select"
          value={formaPagamento}
          onChange={(e) => setFormaPagamento(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="DEBITO">Débito</option>
          <option value="CREDITO">Crédito</option>
          <option value="BOLETO">Boleto</option>
          <option value="PIX">Pix</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Criar Pagamento
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
};

export default PagamentoForm;
