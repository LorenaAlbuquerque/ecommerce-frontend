import React, { useState } from 'react';
import { ReservaService } from '../../services/ReservaService';

const ReservaDetails = () => {
  const [reservaId, setReservaId] = useState('');
  const [reserva, setReserva] = useState(null);
  const [message, setMessage] = useState('');

  const buscarDetalhes = async () => {
    try {
      const response = await ReservaService.consultarReserva(reservaId);
      setReserva(response);
      setMessage('');
    } catch (error) {
      setMessage('Erro ao buscar detalhes da reserva: ' + error.message);
      setReserva(null);
    }
  };

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Detalhes da Reserva</h2>

      <div className="mb-3">
        <label className="form-label">Reserva ID:</label>
        <input
          type="number"
          className="form-control"
          value={reservaId}
          onChange={(e) => setReservaId(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary w-100 mb-3"
        onClick={buscarDetalhes}
      >
        Buscar
      </button>

      {reserva && (
        <div className="mt-4">
          <h3>Informações da Reserva:</h3>
          <ul className="list-group">
            <li className="list-group-item"><strong>ID:</strong> {reserva.id}</li>
            <li className="list-group-item"><strong>Produto:</strong> {reserva.produto.nome}</li>
            <li className="list-group-item"><strong>Usuário:</strong> {reserva.usuario.nome}</li>
            <li className="list-group-item"><strong>Status:</strong> {reserva.status}</li>
          </ul>
        </div>
      )}

      {message && <p className="mt-3 text-center text-danger">{message}</p>}
    </div>
  );
};

export default ReservaDetails;
