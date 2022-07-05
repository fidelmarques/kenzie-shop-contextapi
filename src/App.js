import "./App.css";
import Header from "./components/Header/header";
import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";
import Routes from "./routes/routes";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Routes />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
