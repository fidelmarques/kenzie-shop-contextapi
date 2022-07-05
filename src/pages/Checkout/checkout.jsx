import { CartContainer, CheckoutContainer, Subtotal } from "./style";
import Cart from "../../components/Cart/cart";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Checkout() {
  const { subtotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CartContainer>
        {subtotal === 0 ? (
          <h1>Seu carrinho está vazio, adicione mais itens.</h1>
        ) : (
          <h1>Carrinho de compras</h1>
        )}
        <Cart />
      </CartContainer>
      <Subtotal>
        <h2>Subtotal</h2>
        <p>{`$${subtotal.toFixed(2)}`}</p>
      </Subtotal>
    </CheckoutContainer>
  );
}
export default Checkout;
