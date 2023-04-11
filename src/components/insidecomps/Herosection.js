import React from 'react'
import "../../css/herosection.css"
import { useAuth0 } from '@auth0/auth0-react'

const Herosection = (props) => {
    const {isAuthenticated , user}=useAuth0()

    console.log(props.data)
    return (
        <div>
             {isAuthenticated && <h3>Hello {user.name}</h3>}
            <div className="herocont">
               
                <div className='herodesc'>
                    <p>Welcome to</p>
                    <h1>{props.data.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam quas accusantium et perspiciatis minima nam, quo cupiditate in dicta saepe aliquid aperiam pariatur deleniti dignissimos eos sequi molestiae debitis illo maiores quaerat.</p>
                    <button className='shopnow'>Shop Now</button>
                </div>
                <div className='heroimg'>
                    <img src={require("../../assets/heroimage.jpg")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Herosection
