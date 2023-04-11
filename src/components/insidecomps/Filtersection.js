import React from 'react'
import { useFilterProductContext } from '../../context/FilterContext';
import '../../css/filtersection.css'
import Priceformatter from "../../helpers/Priceformatter"

const Filtersection = () => {
  const tick = <i className="fa-solid fa-check"></i>
  const { Searchchange,clearFilter, allProducts, filters: { text, colors ,price , minPrice , maxPrice } } = useFilterProductContext()

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property]
    })


    if (property === "colors") {
      // return (newVal=["all", ...new Set([].concat(...newVal))])
      newVal = newVal.flat()

    }
    return newVal = ["all", ...new Set(newVal)]


  }

  const categoryData = getUniqueData(allProducts, "category")
  const companyData = getUniqueData(allProducts, "company")
  const colorsData = getUniqueData(allProducts, "colors")

  const onsubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <div className="leftgrid">
        <form action="" onSubmit={onsubmit}>
          <div className="Search">
            <input type="search" name="text" value={text} placeholder='search' onChange={Searchchange} />
          </div>
        </form>
        <div type="category">
          <h4>Category</h4>
          <ul className='categorylist'>
            {
              categoryData.map((elem, index) => {
                return <li key={index}> <button name='category' type='button' value={elem} onClick={Searchchange}>{elem}</button></li>
              })
            }




          </ul>
        </div>
        <div className='company'>
          <h4>Company</h4>
          <form action="">
            <select name="company" id="company" onClick={Searchchange}>
              {companyData.map((elem, index) => {
                return <option value={elem} name="company" key={index}>{elem}</option>
              })

              }
            </select>
          </form>
        </div>
        <div className="colors">
          <h4>Colors</h4>
          {colorsData.map((elem, index) => {

            if (elem === "all") {
              return <button className='colorbtn' type="button" onClick={Searchchange} name='colors' value={elem} key={index}>
                {elem}
              </button>
            }
            return <button className={colors===elem?"colorbtn active":"colorbtn"} type="button" onClick={Searchchange} name='colors' value={elem} key={index} style={{ backgroundColor: elem }}>
              {colors === elem ? tick : null}
            </button>

          })

          }
        </div>
        <div className="price">
          <h4>Price</h4>
          <p><Priceformatter price={price}/></p>
          <input name='price' type="range" min={minPrice} max={maxPrice} value={price}onChange={Searchchange}/>
        </div>
        <div className='clearfilter'>
          <button className='clrfiltrbtn' onClick={clearFilter}>CLEAR FILTER</button>
        </div>
      </div>
    </div>
  )
}

export default Filtersection
