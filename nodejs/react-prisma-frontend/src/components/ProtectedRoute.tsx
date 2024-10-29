import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Se não houver token, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  // Se o token estiver presente, renderiza o componente filho
  return children;
};

export default ProtectedRoute;
