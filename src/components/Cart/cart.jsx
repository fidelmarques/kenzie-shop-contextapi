import {
  CheckoutItem,
  ItemButtons,
  ItemData,
} from "../../pages/Checkout/style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Cart() {
  const { cart, addOneUnit, removeOneUnit, removeFromCart } =
    useContext(CartContext);

  return (
    <>
      {cart.map(
        (prod, index) =>
          prod.qtd !== 0 && (
            <CheckoutItem key={index}>
              <img src={prod.data.item.image} alt={prod.data.item.name} />
              <ItemData>
                <h2>{prod.data.item.name}</h2>
                <h3>{`$${prod.data.item.price.toFixed(2)}`}</h3>
              </ItemData>
              <ItemButtons>
                <div>
                  <button onClick={() => removeOneUnit(prod)}>-</button>
                  <span>{prod.qtd}</span>
                  <button onClick={() => addOneUnit(prod)}>+</button>
                </div>
                <button onClick={() => removeFromCart(prod)}>Remover</button>
              </ItemButtons>
            </CheckoutItem>
          )
      )}
    </>
  );
}
export default Cart;
