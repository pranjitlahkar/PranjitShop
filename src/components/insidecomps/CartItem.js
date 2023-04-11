import React from 'react'
import "../../css/cartitem.css"
import Priceformatter from '../../helpers/Priceformatter'
import Cartbutton from './Cartbutton'
import { useCartContext } from '../../context/CartContext'



const CartItem = ({ id, name, img, color, price, amount }) => {
    const {removeItem, incCart , decCart} = useCartContext()
    

    // const incCart = () => {
      
    //     // cartno < stock ? setCartNo(cartno + 1) : setCartNo(stock)
    //   }
    //   const decCart = () => {
    
    //     // cartno > 1 ? setCartNo(cartno - 1) : setCartNo(1)
    
    //   }
    return (
        <div className='cartitemgrid'>
            <div className='imageandname'>
                <div> <figure>
                    <img src={img} alt="" />
                </figure></div>
                <div className='nameandcol'>
                    <p>{name}</p>
                   <div className="colordiv">
                   <p>color:</p><div className='colorbx' style={{backgroundColor:color}}></div>
                   </div>
                </div>
            </div>
            <div>
                <Priceformatter price={price} />
            </div>
            <div>
                <Cartbutton amount={amount} incCart={()=>incCart(id)} decCart={()=>decCart(id)} />
            </div>
            <div>
                <Priceformatter price={amount * price}/>
            </div>
          <div>
          <i class="fa-solid fa-trash" onClick={()=>{
            removeItem(id)
          }}></i>
          </div>
        </div>
    )
}

export default CartItem
