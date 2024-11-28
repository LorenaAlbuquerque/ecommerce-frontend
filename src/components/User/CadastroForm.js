import React, { useState } from 'react';
import { UserService } from '../../services/UserService';

const CadastroForm = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    endereco: '',
    telefone: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.cadastrarUsuario(usuario);
      setMessage(`Usuário cadastrado com sucesso! ID: ${response.id}`);
    } catch (error) {
      setMessage('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha:</label>
          <input
            type="password"
            className="form-control"
            name="senha"
            value={usuario.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Endereço:</label>
          <input
            type="text"
            className="form-control"
            name="endereco"
            value={usuario.endereco}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone:</label>
          <input
            type="text"
            className="form-control"
            name="telefone"
            value={usuario.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Cadastrar
        </button>
      </form>
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default CadastroForm;