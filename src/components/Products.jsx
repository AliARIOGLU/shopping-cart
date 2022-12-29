import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-info">
            <span>{product.title}</span>
            <b>${product.price}</b>
          </div>
          {cart.some((p) => p.id === product.id) ? (
            <button
              className="button2"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="button1"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    qty: 1,
                    price: product.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
