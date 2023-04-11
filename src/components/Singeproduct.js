import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/Storecontext'
import Imagebox from './insidecomps/Imagebox'
import Navpagedetails from './insidecomps/Navpagedetails'
import PageNavigation from './insidecomps/PageNavigation'
import "../css/singleproduct.css"

const API = "http://13.49.229.228:5000/api/products"

const Singeproduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()
  const { id } = useParams()
  const { _id , company, name, rating, price, images , colors , stock } = singleProduct
  console.log(singleProduct)

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line
  }, [])
  if (isSingleLoading) {
    return <div>....Loading..... </div>
  }
  return (
    <div>
      <PageNavigation title={name} />
      <div className="navpagebox">
        < Imagebox img={images} />
        <Navpagedetails details={singleProduct} />
      </div>
    </div>
  )
}

export default Singeproduct
