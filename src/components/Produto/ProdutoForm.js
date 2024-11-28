import React, { useState } from 'react';
import { ProdutoService } from '../../services/ProdutoService';

const ProdutoForm = ({ produtoInicial = null }) => {
  const [produto, setProduto] = useState(
    produtoInicial || { nome: '', descricao: '', preco: '', disponibilidade: true }
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (produto.id) {
        await ProdutoService.atualizarProduto(produto.id, produto);
        setMessage('Produto atualizado com sucesso!');
      } else {
        await ProdutoService.cadastrarProduto(produto);
        setMessage('Produto cadastrado com sucesso!');
      }
    } catch (error) {
      setMessage('Erro ao salvar o produto: ' + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2 className="mb-4 text-center">{produto.id ? 'Editar Produto' : 'Cadastrar Produto'}</h2>
      
      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input
          type="text"
          name="nome"
          className="form-control"
          value={produto.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descrição:</label>
        <input
          type="text"
          name="descricao"
          className="form-control"
          value={produto.descricao}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Preço:</label>
        <input
          type="number"
          name="preco"
          className="form-control"
          value={produto.preco}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="disponibilidade"
          className="form-check-input"
          checked={produto.disponibilidade}
          onChange={(e) => setProduto({ ...produto, disponibilidade: e.target.checked })}
        />
        <label className="form-check-label">Disponibilidade</label>
      </div>

      <button type="submit" className="btn btn-primary">{produto.id ? 'Atualizar' : 'Cadastrar'}</button>

      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </form>
  );
};

export default ProdutoForm;
