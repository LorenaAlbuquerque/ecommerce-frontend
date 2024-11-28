import React, { useState } from 'react';
import { UserService } from '../../services/UserService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.login({ email, senha });
      setMessage(`Login bem-sucedido! Bem-vindo, ${response.nome}`);
      // Aqui você pode salvar o token do usuário no localStorage ou em um contexto
    } catch (error) {
      setMessage('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <div className="container mt-5 p-4 border rounded bg-light">
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha:</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Entrar
        </button>
      </form>
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default LoginForm;
