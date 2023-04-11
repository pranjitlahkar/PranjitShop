import React from 'react'
import { useFilterProductContext } from '../../context/FilterContext'
import "../../css/productlist.css"
import Gridview from './Gridview'
import Listview from './Listview'

const Productlist = () => {

  const { filterProducts, gridView ,listView} = useFilterProductContext()
  console.log(filterProducts , gridView)

  if (gridView===true) {
    return <Gridview products={filterProducts} />
  }
else if(listView===true){
   return <Listview products={filterProducts} />
}
  


}

export default Productlist
