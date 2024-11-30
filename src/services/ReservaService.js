import api from './api';

export const ReservaService = {
  listarReservas: async () => {
    const response = await api.get('/reservas');
    return response.data;
  },
  criarReserva: async ({ produtoId, usuarioId }) => {
    const response = await api.post('/reservas', { produtoId, usuarioId });
    return response.data;
  }, 
  cancelarReserva: async (reservaId) => {
    const response = await api.put(`/reservas/${reservaId}/cancelar`); 
    return response.data;
  },    
  consultarReserva: async (reservaId) => {
    const response = await api.get(`/reservas/${reservaId}`);
    return response.data;
  },
};
