import { createContext, useState } from "react";
import { products } from "../../productList";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productArr, setProductArr] = useState(products);

  return (
    <ProductsContext.Provider value={{ productArr }}>
      {children}
    </ProductsContext.Provider>
  );
};
