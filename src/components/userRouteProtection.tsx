import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';


interface UserRouteProtectionProps {
    children: React.ReactNode;
  }
  
const UserRouteProtection: React.FC<UserRouteProtectionProps> = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (!user || !user.isUser ) {
      // Redirecionar usuário não autenticado ou não administrador para a página inicial
      router.push('/');
    }
  }, [user]);

  return <>{children}</>;
};

export default UserRouteProtection;