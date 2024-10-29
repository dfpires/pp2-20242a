import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UsersPage } from './pages/UsersPage';
import { ProductsPage } from './pages/ProductsPage';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'
import { HomePage } from './pages/Home';
import Layout from './components/Layout';
import { LoginPage } from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Define como `true` se o token existir
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* As rotas abaixo estão protegidas */}
          <Route path="/" element={<HomePage/>} />
          <Route 
            path="/users" 
            element={
              <ProtectedRoute>
                  <UsersPage /> 
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/products" 
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            } 
            />
          <Route 
            path="/orders" 
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
