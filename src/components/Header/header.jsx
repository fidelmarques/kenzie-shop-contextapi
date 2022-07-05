import { Button, CartItems, HeaderContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Header() {
  const { itemcount } = useContext(CartContext);
  const history = useHistory();

  return (
    <HeaderContainer>
      <h1 onClick={() => history.push("/")}>Kenzie Shop</h1>
      <Button onClick={() => history.push("/checkout")}>
        <FaShoppingCart />
        <p>Carrinho</p>
        {itemcount !== 0 && <CartItems>{itemcount}</CartItems>}
      </Button>
    </HeaderContainer>
  );
}
export default Header;
