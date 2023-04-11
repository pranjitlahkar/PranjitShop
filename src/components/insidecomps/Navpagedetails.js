import React from 'react'
import "../../css/navpagedetails.css"
import Priceformatter from '../../helpers/Priceformatter'
import AddtoCart from './AddtoCart'
import Stars from './Stars'

const Navpagedetails = ({details}) => {
   const {name , company , _id , price , rating , colors , stock}=details
   
    return (
        <div>
            <div className="rightside">
                <div className='title'>{name}</div>
                <div className='rating'><Stars rating={rating}/></div>
                <div className='mrpprice'>MRP:<del><Priceformatter price={price +3000}/></del></div>
                <div className='dealprice'>Deal of the day price:<Priceformatter price={price}/></div>
                <div className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum assumenda quo optio. Veritatis quod rem delectus ab, aspernatur optio corporis voluptates nulla tenetur unde, saepe quae inventore perferendis possimus facere quasi! Quos corporis omnis repudiandae sint consequuntur distinctio voluptates ab, nostrum est obcaecati ullam rerum. Dignissimos omnis eos maiores vel cum reprehenderit minus earum? Omnis.</div>
                <div className='icons'>
                    <div className="iconi"><i class="fa-solid fa-truck"></i> <p>free delivery</p></div>
                    <div className="iconi"><i class="fa-solid fa-repeat"> </i><p>30-days replacement</p></div>
                    <div className="iconi"><i class="fa-solid fa-shield-halved"> </i><p>2-years warranty</p></div>
                    <div className="iconi"></div>
                </div>
                <div className='stock'>Availability: In Stock</div>
                <div className='brand'>Brand: {company}</div>
                <div className='id'>ID: {_id}</div>
                <hr />
                {stock>0 && <AddtoCart products={details}/>}

            </div>
        </div>
    )
}

export default Navpagedetails
