import axios from "axios";
import { useEffect, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log(state);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "POPULATE_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
