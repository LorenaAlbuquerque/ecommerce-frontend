import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProdutoList from '../components/Produto/ProdutoList';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/produtos/cadastro')}
        >
          Adicionar Produto
        </button>
      </div>
      <ProdutoList />
    </div>
  );
};

export default Home;
