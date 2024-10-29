import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/userService';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, senha);

      if (response.data.token) {
        // Armazena o token no localStorage (ou sessionStorage)
        localStorage.setItem('token', response.data.token);
        navigate('/');  // Redireciona para a página inicial
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-2 p-2 border"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="block w-full mb-4 p-2 border"
        />
        <button type="submit" className="bg-blue-700 text-red p-2 w-full">
  Entrar
</button>
      </form>
    </div>
  );
};
