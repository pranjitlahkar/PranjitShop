import React from 'react'
import Brandscollab from './insidecomps/Brandscollab'
import Contactsection from './insidecomps/Contactsection'
import Featureproduct from './insidecomps/Featureproduct'
import Footer from './insidecomps/Footer'
import Herosection from './insidecomps/Herosection'
import Shipping from './insidecomps/Shipping'


const Home = () => {
 

  const data= {
    name:"Pranjit's Store"
  }
  return (
    <div>
      <Herosection data={data}/>
      <Shipping/>
      <Featureproduct/>
      <Brandscollab/>
      <Contactsection/>
      <Footer/>
    </div>
  )
}

export default Home