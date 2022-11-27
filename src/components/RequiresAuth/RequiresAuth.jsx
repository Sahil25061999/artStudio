import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getToken } from '../../utils/utils_index';

export const RequiresAuth = ({ children }) => {
  const token = getToken();
  const location = useLocation();
  return token?.length ? (
    children
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};
