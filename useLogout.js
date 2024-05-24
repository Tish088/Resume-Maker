import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({});
    navigate('/');
  };

  return handleLogout;
};

export default useLogout;
