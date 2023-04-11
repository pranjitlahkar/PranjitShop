import React from 'react'
import { NavLink } from 'react-router-dom'

import "../../css/listview.css"
import Priceformatter from '../../helpers/Priceformatter'

const Listview = ({ products }) => {
  console.log(products)
  return (
    <div>
      <div className='listcont'>
        {
          products.map((elem, index) => {
            const { id, name, img, price } = elem
            console.log(price)
            return (
              <div className='listbox' key={id}>
                <div> <figure className='listfig'>
                  <img src={img} alt="" />
               
                </figure></div>
                <div className='rightlist'>
                  <div className='name'><h4>{name}</h4></div>
                  <div className="desc"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quos rem vitae minus omnis sunt ex, aperiam eveniet sapiente voluptate, sint at delectus facere deserunt! Laudantium dignissimos, nihil expedita quas aut nam fuga.</p></div>
                  <div className='price'><p>Price:<Priceformatter price={price} /></p></div>
                  <div>
                  <NavLink to={`/singleproduct/${id}`}>
                    <button className='btnoption'>
                      <h4>SEE OPTIONS</h4>
                    </button>
                  </NavLink>
                </div>

                </div>

              </div>

            )

          })
        }
      </div>
    </div>

  )
}

export default Listview
