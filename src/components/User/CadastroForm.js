import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.cadastrarUsuario(usuario);
      setMessage('Cadastro realizado com sucesso!');
      setTimeout(() => navigate('/login'), 2000); 
    } catch (error) {
      setMessage('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded bg-light">
      <h2 className="text-center mb-4">Cadastro de Usuário</h2>
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
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default CadastroForm;
