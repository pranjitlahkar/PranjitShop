import React from 'react'
import "../../css/contactsection.css"
import { useAuth0 } from '@auth0/auth0-react'

const Contactsection = () => {

    const {user, isAuthenticated}=useAuth0()
    return (
        <div>
            <div className="contactcontainer">
                <div className='contactheading'><p><h1>Feel free to Contact Us</h1></p></div>
                <div className="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d948.2762473473463!2d91.77622213202626!3d26.189697707660542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678544026531!5m2!1sen!2sin" height="450" className='gmap' title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                <div className='formbox'>
                    <form className='contactform' action="">
                        <input type="text" value={isAuthenticated?user.name :""}  placeholder='name'/>
                        <input type="email" value={isAuthenticated?user.email:""} placeholder='email'/>
                        <input type="number" placeholder='mobile no'/>
                        <input type="text"  placeholder='message'/>
                        <button className='submitbtn' type='submit'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactsection
