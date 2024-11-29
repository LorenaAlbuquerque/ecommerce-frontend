import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) {
      navigate('/login'); 
    } else {
      setUsuario(usuarioLogado);
    }
  }, [navigate]);

  if (!usuario) return null;

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
    </div>
  );
};

export default UserProfile;
