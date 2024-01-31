import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AppAuthenticator } from '../Auth/AppAuthenticator';
import { useUser } from '../Contexts/UserContext';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';
import { AdminRoutes } from './AdminRoutes';
import { ClientRoutes } from './ClientRoutes';
import { initialUser } from '../Types/restAPI/IUser';

const AppRoutes = () => {
  const { userData } = useUser();
  const navigate = useNavigate();
  const isAuthenticated = userData?.isLoggedIn || userData?.isLoggedIn;

  useEffect(() => {
    // Verifica se o usuário não está autenticado e redireciona para /unauthenticated se ele tentar acessar uma rota protegida
    if (!isAuthenticated && !window.location.pathname.includes('/unauthenticated')) {
      navigate('/unauthenticated');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/" element={<AppAuthenticator userType={initialUser} />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/cliente/*" element={<ClientRoutes />} />
      <Route path="/unauthenticated/*" element={<UnauthenticatedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;