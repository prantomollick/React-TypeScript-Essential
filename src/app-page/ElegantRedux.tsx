import { Provider } from "react-redux";
import Product from "../components/shop/Product";
import Shop from "../components/shop/Shop";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { store } from "../store/store";
import Header from "../components/shop/Header";

const ElegantRedux = () => {
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
};

export default ElegantRedux;
