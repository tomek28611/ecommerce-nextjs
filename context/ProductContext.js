import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children, initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    console.log("ProductProvider initialProducts:", initialProducts);
    setProducts(initialProducts);
  }, [initialProducts]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
