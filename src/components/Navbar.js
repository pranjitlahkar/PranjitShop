import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
import "../css/Navbar.css"
import { useCartContext } from '../context/CartContext'

const Navbar = () => {
  const { loginWithRedirect ,logout , isAuthenticated} = useAuth0();
  const{ totalItem} = useCartContext()

  const [hamburger, sethamburger] = useState(false)

  return (
    <>
      <nav className='navbar'>

        <div className='logo'>
          <Link to={"/"} >
            <img src={require("../assets/logo.png")} alt="" />
          </Link>
        </div>
        <div className={!hamburger ? 'links' : "block"}>
          <ul className="navlink">
            <li className="navitem"><Link to={"/"}> HOME </Link></li>
  
            <li className="navitem"><Link to={"/product"}> PRODUCTS</Link></li>
            <li className="navitem"><Link to={"/about"}> ABOUT</Link> </li>
            <li className="navitem"><Link to={"/contact"}> CONTACT</Link> </li>
           {!isAuthenticated ? <li className="navitem"><button className='loginout' onClick={()=>{
              loginWithRedirect({returnTo: window.location.origin})
            }}>LOGIN</button> </li> : <li className='navitem'>
            <button className='loginout' onClick={()=>{
              logout({returnTo: window.location.origin})
            }}>LOGOUT</button>
          </li>}
          
            <li className="navitem"><Link to={"/cart"}> <i class="fa-solid fa-cart-shopping"></i>{totalItem}</Link> </li>
          </ul>
        </div>
        <div className="icons">
          <Link to={"https://www.facebook.com/pranjit.lahkar.12"}><i className="fa-brands  fa-facebook"></i></Link>
          <Link to={"https://www.instagram.com/pranjit_lahkar63/"}><i className="fa-brands footicn fa-instagram"></i></Link>
        </div>
        <div className='hamburger' onClick={() => {
          sethamburger(!hamburger)
        }}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

    </>
  )
}

export default Navbar