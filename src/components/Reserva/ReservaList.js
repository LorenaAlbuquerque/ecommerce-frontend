import React, { useState, useEffect } from 'react';
import { ReservaService } from '../../services/ReservaService';
import ReservaDetails from './ReservaDetails'; 

const ReservaList = () => {
  const [reservas, setReservas] = useState([]);
  const [reservaSelecionada, setReservaSelecionada] = useState(null);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await ReservaService.listarReservas();
        setReservas(response);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    };
    fetchReservas();
  }, []);

  const handleVerDetalhes = (reserva) => {
    setReservaSelecionada(reserva);
  };

  const handleCancelar = async (reservaId) => {
    try {
      const reservaAtualizada = await ReservaService.cancelarReserva(reservaId);
      setReservas((prevReservas) =>
        prevReservas.map((reserva) =>
          reserva.id === reservaId ? { ...reserva, status: reservaAtualizada.status } : reserva
        )
      );
    } catch (error) {
      console.error('Erro ao cancelar a reserva:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Lista de Reservas</h2>
      <div className="list-group">
        {reservas.map((reserva) => (
          <div
            key={reserva.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              reserva.status === 'CANCELADA' ? 'bg-light text-muted' : ''
            }`}
          >
            <div>
              <strong>ID:</strong> {reserva.id} <br />
              <strong>Produto:</strong> {reserva.produto?.nome || 'Produto não disponível'} <br />
              <strong>Status:</strong> {reserva.status}
            </div>
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={() => handleVerDetalhes(reserva)}
                disabled={reserva.status === 'CANCELADA'} 
              >
                Ver Detalhes
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleCancelar(reserva.id)}
                disabled={reserva.status === 'CANCELADA'} 
              >
                Cancelar
              </button>
            </div>
          </div>
        ))}
      </div>
      {reservaSelecionada && (
        <ReservaDetails reserva={reservaSelecionada} onClose={() => setReservaSelecionada(null)} />
      )}
    </div>
  );
};

export default ReservaList;
