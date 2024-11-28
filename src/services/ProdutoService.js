import api from './api';

export const ProdutoService = {
  obterProdutos: async () => {
    const response = await api.get('/produtos');
    return response.data;
  },
  cadastrarProduto: async (produto) => {
    const response = await api.post('/produtos/cadastro', produto);
    return response.data;
  },
  verificarDisponibilidade: async (produtoId) => {
    const response = await api.get(`/produtos/${produtoId}/disponibilidade`);
    return response.data;
  },
  atualizarEstoque: async (produtoId, disponibilidade) => {
    const response = await api.put(`/produtos/${produtoId}/estoque`, { disponibilidade });
    return response.data;
  },
};
