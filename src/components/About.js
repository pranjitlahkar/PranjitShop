import React, { useContext } from 'react'
import {  storeContext } from '../context/Storecontext'
import Herosection from './insidecomps/Herosection'

const About = () => {
  const data={
    name:"PranjitShop"
  }
  const {name, role , address} = useContext(storeContext)
  return (
    <div>
      <h1>{name}</h1>
      <h1>{role}</h1>
      <h2>{address}</h2>
      <Herosection data={data}/>
    </div>
  )
}

export default About
