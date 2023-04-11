import React from 'react'
import { useFilterProductContext } from '../../context/FilterContext'
import "../../css/sortsection.css"

const Sortsection = () => {
  const {setGridView , setListView , gridView ,listView ,filterProducts, Sorting}= useFilterProductContext()
 
  return (
    <div>
       <div className="righttop">
          <div className="buttons">
            <button className={listView?"LiGrbtn active":"LiGrbtn"} onClick={setListView}><i class="fa-solid fa-list"></i></button>
            <button className={gridView?"LiGrbtn active":"LiGrbtn"} onClick={setGridView}><i class="fa-solid fa-table-cells-large"></i></button>
          </div>
          <div className="para"><p>{filterProducts.length} Products Available</p></div>
          <div className="input">
            <form action="/">
              <label htmlFor="sort">Sort By :</label>
              <select onClick={Sorting} name="sort" id="sort">
              <option value="Lowest">Price(lowest)</option>
              <option value="Highest">Price(highest)</option>
              <option value="A-z">Name(A-z)</option>
              <option value="Z-a">Name(Z-a)</option>
              </select>
             
            </form>
          </div>
        </div>
    </div>
  )
}

export default Sortsection
