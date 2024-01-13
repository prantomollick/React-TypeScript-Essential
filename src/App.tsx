import Header from "./components/shop/Header.tsx";
import Product from "./components/shop/Product.tsx";
import Shop from "./components/shop/Shop.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
