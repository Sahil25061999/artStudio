import { useLocation, Navigate } from 'react-router-dom';
import { useToken } from '../../hook/hook_index';

export const RequiresAuth = ({ children }) => {
  const token = useToken();
  const location = useLocation();
  return token?.length ? (
    children
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};
