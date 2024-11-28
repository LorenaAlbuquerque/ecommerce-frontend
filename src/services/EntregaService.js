import api from './api';

export const EntregaService = {
  criarEntrega: async (reservaId, enderecoEntrega) => {
    const response = await api.post('/entregas', null, {
      params: { reservaId, enderecoEntrega },
    });
    return response.data;
  },
  atualizarStatusEntrega: async (entregaId, novoStatus) => {
    const response = await api.put(`/entregas/${entregaId}/status`, null, {
      params: { novoStatus },
    });
    return response.data;
  },
};
