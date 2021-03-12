import React from 'react'
import Product from './Product'

const ProductList = ({ products, handleChangeBasket, increment }) => (
  <div className="row row-cols-2 row-cols-md-4">
    {products.map(el =>
      <Product
        key={el.id}
        product={el}
        handleChangeBasket={handleChangeBasket}
        increment={increment}
      />
    )}
  </div>
)

export default ProductList