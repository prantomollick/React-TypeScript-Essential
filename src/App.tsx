import { Provider } from "react-redux";
import Header from "./components/shop/Header.tsx";
import Product from "./components/shop/Product.tsx";
import Shop from "./components/shop/Shop.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import { store } from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default App;
