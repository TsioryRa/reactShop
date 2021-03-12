import React from 'react'

const SearchProduct = ({searchProduct, handleChange}) => (
  <form className="form-inline">
{/*     {found ?
      <span className="navbar-text mr-4">Found {found} out of {total}</span>
      :
      <span className="navbar-text mr-4">No product found</span>
    } */}
    <input className="form-control"
     type="search" 
     placeholder="Search" 
     aria-label="Search"  
     value={searchProduct}
     onChange={handleChange} />
  </form>
)

export default SearchProduct