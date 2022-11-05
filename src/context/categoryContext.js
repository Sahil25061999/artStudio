import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/categories');
      const categoryData = data.categories;
      setCategoryData(categoryData);
    })();
  }, []);
  return (
    <CategoryContext.Provider value={{ categoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
