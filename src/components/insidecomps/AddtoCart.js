import React, { useState } from 'react'
import '../../css/addtocart.css'
import Cartbutton from './Cartbutton'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const AddtoCart = ({ products }) => {
  const {addToCart} = useCartContext()
  const {id , price  , name ,colors,stock} = products


  const tick = <i className="fa-solid fa-check"></i>

 
  const [color, setColor] = useState(colors[0])
  const [cartno, setCartNo] = useState(1)

  const incCart = () => {
    cartno < stock ? setCartNo(cartno + 1) : setCartNo(stock)
  }
  const decCart = () => {

    cartno > 1 ? setCartNo(cartno - 1) : setCartNo(1)

  }
  return (
    <div>
      <p>Colors: {colors.map((currcolor, index) => {
        return <button className={color === currcolor ? "btncolor active" : "btncolor"} key={index} style={{
          backgroundColor: currcolor
        }} onClick={() => {
          setColor(currcolor)
        }}>

          {color === currcolor ? (tick) : null
          }
        </button>
      })}</p>
      <div>
        <Cartbutton id={id} color={color} products={products} incCart={incCart} decCart={decCart} amount={cartno} />
      </div>
      <div>
        <div>
          <NavLink to={"/cart"} onClick={() => {
            addToCart(id, color, cartno, price, name, products)
          }}>
            <button className='AddCart'>Add to Cart</button>
          </NavLink>
        </div>
      </div>
    </div>

  )
}

export default AddtoCart
