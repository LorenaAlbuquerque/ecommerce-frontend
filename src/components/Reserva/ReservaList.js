import React, { useState, useEffect } from 'react';
import { ReservaService } from '../../services/ReservaService';

const ReservaList = () => {
  const [reservas, setReservas] = useState([]);

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

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Lista de Reservas</h2>
      
      <div className="list-group">
        {reservas.map((reserva) => (
          <div key={reserva.id} className="list-group-item">
            <strong>ID:</strong> {reserva.id} <br />
            <strong>Produto:</strong> {reserva.produto.nome} <br />
            <strong>Usuário:</strong> {reserva.usuario.nome}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservaList;
