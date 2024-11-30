import React, { useState } from 'react';
import { PagamentoService } from '../../services/PagamentoService';
import { ReservaService } from '../../services/ReservaService';

const PagamentoForm = ({ onPagamentoFinalizado }) => {
  const [reservaId, setReservaId] = useState('');
  const [valor, setValor] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [message, setMessage] = useState('');

  const handleBuscarValor = async () => {
    try {
      const reserva = await ReservaService.consultarReserva(reservaId);
      setValor(reserva.produto.preco); 
    } catch (error) {
      setMessage('Erro ao buscar valor: ' + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PagamentoService.criarPagamento({ reservaId, valor, formaPagamento });
      setMessage('Pagamento realizado com sucesso!');
      onPagamentoFinalizado(reservaId); 
    } catch (error) {
      setMessage('Erro ao realizar pagamento: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Pagamento</h2>
      <div className="mb-3">
        <label className="form-label">Reserva ID:</label>
        <input
          type="number"
          className="form-control"
          value={reservaId}
          onChange={(e) => setReservaId(e.target.value)}
          required
        />
        <button type="button" className="btn btn-primary mt-2" onClick={handleBuscarValor}>
          Buscar Valor
        </button>
      </div>
      <div className="mb-3">
        <label className="form-label">Valor:</label>
        <input
          type="number"
          className="form-control"
          value={valor}
          readOnly
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
        Realizar Pagamento
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
};

export default PagamentoForm;
