import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "../../css/cart.css"
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import Priceformatter from '../../helpers/Priceformatter'
import { useAuth0 } from '@auth0/auth0-react'

const Cart = () => {
   const {isAuthenticated , user} =useAuth0()
    
    const { cart , clearCart ,totalPrice ,shippingFees } = useCartContext()
const navigate = useNavigate()

const continueShopping=()=>{
    navigate("/product")
}
if(cart.length===0){
    return <div><h3>Your Cart is Empty</h3></div>
}


    console.log(cart)
    return (
        <>
        {isAuthenticated&&
        
        <div className='userinf'>
            <img src={user.picture} alt={user.name} />
            <h3>Hello {user.name}</h3>
            
        </div>
        }
       
        <div className='cartcont'>
        <div className='cartgrid'>

            <h4><p>Item</p></h4>
            <h4> <p>Price</p></h4>
            <h4><p>Quantity</p></h4>
            <h4><p>Subtotal</p></h4>
            <h4><p>Remove</p></h4>

        </div>
        <hr />
        <div>
            {cart.map((currElem, index) => {
                return <CartItem key={currElem.id} {...currElem} />
            })}
        </div>
        <hr />
        {cart  && <div>
            <button onClick={()=>{
                continueShopping()
            }}>CONTINUE SHOPPING</button>
            <button onClick={()=>{
                clearCart()
            }}>CLEAR CART</button>
        </div>}
<div className='totalCont'>
<div className='shippergrid'>
    <h6>SubTotal:</h6>
    <h6><Priceformatter price={totalPrice}/></h6>
</div>
<div className='shippergrid'>
    <h6>Shipping Price:</h6>
    <h6><Priceformatter price={shippingFees}/></h6>
</div>
<hr />
<div className='shippergrid'>
    <h6>Order Total:</h6>
    <h6><Priceformatter price={shippingFees + totalPrice}/></h6>
</div>
</div>
    </div></>
        

    )
}

export default Cart
