import { createContext, useState } from "react";
import { products } from "../../productList";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const cartArray = [];
  products.forEach((item) => {
    cartArray.push({ data: { item }, qtd: 0 });
  });

  const [cart, setCart] = useState(cartArray);
  const [itemcount, setItemcount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const updateSubtotal = () => {
    let subt = 0;
    cart.forEach((prod) => {
      subt += prod.qtd * prod.data.item.price;
      setSubtotal(subt);
    });
  };

  const updateCartCounter = () => {
    let counter = 0;
    cart.forEach((prod) => {
      if (prod.qtd !== 0) {
        counter += prod.qtd;
      }
    });
    setItemcount(counter);
  };

  const addToCart = (item) => {
    let newCart = cart;
    newCart[item.id - 1].qtd++;
    setCart(newCart);
    updateCartCounter();
    updateSubtotal();
    toast.success(`${item.name} foi adicionado ao carrinho.`, {
      theme: "colored",
    });
  };

  const addOneUnit = (item) => {
    const index = cart.indexOf(item);
    let newCart = cart;
    newCart[index].qtd++;
    setCart(newCart);
    updateCartCounter();
    updateSubtotal();
  };

  const removeOneUnit = (item) => {
    const index = cart.indexOf(item);
    let newCart = cart;
    newCart[index].qtd--;
    setCart(newCart);
    updateCartCounter();
    updateSubtotal();
    if (newCart[index].qtd === 0) {
      toast.warning(`${item.data.item.name} foi removido do carrinho.`, {
        theme: "colored",
      });
    }
  };

  const removeFromCart = (item) => {
    console.log(item);
    const index = cart.indexOf(item);
    let newCart = cart;
    newCart[index].qtd = 0;
    setCart(newCart);
    updateCartCounter();
    updateSubtotal();
    toast.warning(`${item.data.item.name} foi removido do carrinho.`, {
      theme: "colored",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemcount,
        subtotal,
        addOneUnit,
        removeOneUnit,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
