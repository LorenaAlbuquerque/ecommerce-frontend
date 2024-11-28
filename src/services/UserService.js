import api from './api';

export const UserService = {
  cadastrarUsuario: async (usuario) => {
    const response = await api.post('/usuarios/cadastro', usuario);
    return response.data;
  },
  login: async ({ email, senha }) => {
    const response = await api.post('/usuarios/login', { email, senha });
    return response.data;
  },
  getPerfil: async () => {
    const response = await api.get('/usuarios');
    return response.data;
  },
};
