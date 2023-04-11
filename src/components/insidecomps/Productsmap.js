import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/productmap.css'

import Priceformatter from '../../helpers/Priceformatter'

const Productsmap = (currElem) => {
  const { id, name, img, price } = currElem

  return (
    <div>
      <NavLink to={`/singleproduct/${id}`}>
        <div className='card'>
          <figure className='figbox'>
            <img src={img} alt="" />
            <figcaption className='caption'>{name}</figcaption>
          </figure>
          <div className='cardcont'>
            <h3>{name}</h3>
            <p>{<Priceformatter price={price}/>}</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Productsmap
