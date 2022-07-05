import { Button } from "../Header/style";
import { Card, Line } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <Line />
      <h2>{product.name}</h2>
      <h3>{`$${product.price.toFixed(2)}`}</h3>
      <Button onClick={() => addToCart(product)}>
        <span>Adicionar ao carrinho</span>
      </Button>
    </Card>
  );
}
export default ProductCard;
