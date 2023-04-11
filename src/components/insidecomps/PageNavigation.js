import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/pageNavigation.css"

const PageNavigation = ({ title }) => {
    return (
        <><div className='pagelink'>
            <NavLink to={"/"}>Home</NavLink>/{title}
        </div>
           
        </>

    )
}

export default PageNavigation
