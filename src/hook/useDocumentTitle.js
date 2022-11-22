import { useEffect } from 'react';

export const useDocumentTitle = (value, dependency = null) => {
  useEffect(() => {
    document.title = value;
  }, [dependency]);
};
