import React from 'react'
import "../css/Product.css"
import Filtersection from './insidecomps/Filtersection'
import Productlist from './insidecomps/Productlist'
import Sortsection from './insidecomps/Sortsection'

const Products = () => {


  
  return (
    <div className='gridcont'>

      <Filtersection />
      <div className='rightgrid'>
        <Sortsection  />
        <Productlist />
      </div>
      
    </div>
  )
}

export default Products
