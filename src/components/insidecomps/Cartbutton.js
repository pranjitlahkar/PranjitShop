import React from 'react'

import "../../css/cartbutton.css"



const Cartbutton = ({ incCart, decCart, amount ,color, products}) => {
   

    console.log(products ,"color",  color)

    return (<>
        <div className='cartsec'>
            <button onClick={incCart}><i class="fa-solid fa-plus"></i></button>
            <div><p>{amount}</p></div>
            <button onClick={decCart}><i class="fa-solid fa-minus"></i></button>
        </div>
       

    </>

    )
}

export default Cartbutton
