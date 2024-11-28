import React, { useState, useEffect } from 'react';
import { UserService } from '../../services/UserService';

const UserProfile = () => {
  const [usuario, setUsuario] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await UserService.getPerfil();
        setUsuario(response);
      } catch (error) {
        setMessage('Erro ao buscar perfil do usuário: ' + error.message);
      }
    };
    fetchUsuario();
  }, []);

  if (!usuario) return <p className="text-center mt-3">{message || 'Carregando perfil...'}</p>;

  return (
    <div className="container mt-5 p-4 border rounded bg-light">
      <h2 className="text-center mb-4">Perfil do Usuário</h2>
      <div className="list-group">
        <div className="list-group-item">
          <strong>Nome:</strong> {usuario.nome}
        </div>
        <div className="list-group-item">
          <strong>Email:</strong> {usuario.email}
        </div>
        <div className="list-group-item">
          <strong>Endereço:</strong> {usuario.endereco}
        </div>
        <div className="list-group-item">
          <strong>Telefone:</strong> {usuario.telefone}
        </div>
      </div>
      {message && <p className="mt-3 text-center text-danger">{message}</p>}
    </div>
  );
};

export default UserProfile;
