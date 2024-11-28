import React, { useState, useEffect } from 'react';
import { ProdutoService } from '../../services/ProdutoService';

const ProdutoList = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await ProdutoService.obterProdutos();
        setProdutos(response);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProdutos();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Lista de Produtos</h2>
      <div className="list-group">
        {produtos.map((produto) => (
          <div className="list-group-item" key={produto.id}>
            <h5 className="mb-1">{produto.nome}</h5>
            <p className="mb-1">{produto.descricao}</p>
            <small className="text-muted">R$ {produto.preco.toFixed(2)}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdutoList;
