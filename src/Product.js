import React, { useState, useEffect, useReducer } from "react";
import IconButton from '@material-ui/core/IconButton';
import AddCartButton from "@material-ui/icons/AddShoppingCart";

function Product({key, product, handleChangeBasket, increment}) {
const [quantity, setQuantity] = useState(1);
const handleQuantityChange = e => {
  setQuantity(e.target.value);
};
return (
  <div className="col mb-4">
    <div className="card text-white bg-dark">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {product.title}
        </h5>
        <p className="card-text">
          <small className="text-muted">{product.description}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{product.price}€</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{product.category}</small>
        </p>
        <select onChange={handleQuantityChange}>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <IconButton
          style={{ color: "white" }}
          onClick={() => increment ({item: product, qty:quantity})}
          aria-label="add to shopping cart">
          <AddCartButton />
        </IconButton>
      </div>
    </div>
  </div>
  );
}

export default Product;
