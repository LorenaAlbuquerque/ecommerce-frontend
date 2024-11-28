import api from './api';

export const PagamentoService = {
  criarPagamento: async ({ reservaId, valor, formaPagamento }) => {
    const response = await api.post('/pagamentos', { reservaId, valor, formaPagamento });
    return response.data;
  },
};
