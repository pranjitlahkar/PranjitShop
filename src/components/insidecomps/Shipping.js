import React from 'react'
import "../../css/shipping.css"

const Shipping = () => {
    return (
        <div>
            <div className="shipcont">
                <div className="shipbox shipboxflex">
                    <div>
                        <div className='icondiv'> <i className="fa-solid fa-truck-fast"></i></div>
                        <div><p>Super-fast and Free Delivery</p></div>
                    </div>
                </div>
                <div className="shipbox shipbox2">
                    <div className="shipgrid">
                        <div className='icondiv'><i className="fa-solid fa-sack-dollar"></i></div>
                        <div><p>money-back guaranteed</p></div>
                    </div>
                    <div className="shipgrid">
                        <div className='icondiv'><i className="fa-solid fa-shield-halved"></i></div>
                        <div>No Contact Shipping</div>
                    </div>
                </div>
                <div className="shipbox shipboxflex">
                    <div className='icondiv'><i className="fa-solid fa-key"></i></div>
                    <div><p>Super-Secure Payment System</p></div>
                </div>
            </div>
        </div>
    )
}

export default Shipping
