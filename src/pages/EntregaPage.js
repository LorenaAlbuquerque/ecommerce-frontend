import React, { useState, useEffect } from 'react';
import { EntregaService } from '../services/EntregaService';

const EntregaPage = () => {
  const [entregas, setEntregas] = useState([]);

  useEffect(() => {
    const fetchEntregas = async () => {
      try {
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')); 
        if (!usuarioLogado || !usuarioLogado.id) {
          console.error('Usuário não logado ou sem ID.');
          return;
        }

        const response = await EntregaService.listarEntregas(usuarioLogado.id); 
        setEntregas(response);
      } catch (error) {
        console.error('Erro ao buscar entregas:', error);
      }
    };
    fetchEntregas();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Entrega</h1>
      <div className="list-group">
        {entregas.map((entrega) => (
          <div key={entrega.id} className="list-group-item">
            <strong>Reserva:</strong> {entrega.reservaId} <br />
            <strong>Endereço:</strong> {entrega.enderecoEntrega} <br />
            <strong>Status:</strong> {entrega.statusEntrega}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntregaPage;
