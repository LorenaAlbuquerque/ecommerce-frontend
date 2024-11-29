import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReservaPage from './pages/ReservaPage';
import PagamentoPage from './pages/PagamentoPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import UserProfilePage from './pages/UserProfilePage';
import ProdutoCadastroPage from './pages/ProdutoCadastroPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<ReservaPage />} />
          <Route path="/pagamentos" element={<PagamentoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/perfil" element={<UserProfilePage />} />
          <Route path="/produtos/cadastro" element={<ProdutoCadastroPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
