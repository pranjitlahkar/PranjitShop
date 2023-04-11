import React from 'react'
import "../../css/footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footercont">
        <div className='footcontent'>
          <div><p><h3>Pranjit's shop</h3></p></div>
          <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod.</p></div>
        </div>
        <div className='footcontent'>
          <div><p><h3>Subscribe to get updates</h3></p></div>

          <div className='subinput' > <input type="email" placeholder='E-mail' />
            <button className='subscribe'>Subscibe</button></div>
        </div>
        <div className='footcontent'>
          <div><h3>Follow us</h3></div>
          <div className="icons">
            <div> <i class="fa-brands fa-discord"></i></div>
            <div><i class="fa-brands fa-youtube"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
          </div>
        </div>
        <div className='footcontent'>
          <div> <h3>Call us</h3></div>
          <div><p>+913214167890</p></div>
        </div>
        <div className="pop">
  <div><p>Ready to get sttarted talk to us today</p></div>
  <div><button>Get started</button></div>
</div>
      </div>

    </div>
  )
}

export default Footer

