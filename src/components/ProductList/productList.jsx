import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import ProductCard from "../ProductCard/productCard";
import { ProductContainer } from "./style";

function ProductList() {
  const { productArr } = useContext(ProductsContext);
  return (
    <ProductContainer>
      {productArr &&
        productArr.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
    </ProductContainer>
  );
}
export default ProductList;
