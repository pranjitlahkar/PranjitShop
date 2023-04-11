import React from 'react'
import "../../css/gridview.css"
import Productsmap from './Productsmap'
const Gridview = ({ products }) => {
    console.log(products)
    return (
        <div>
            <div className="gridcont">
                {products.map((elem, index) => {
                    return <Productsmap key={elem.id} {...elem} />
                })}
            </div>
        </div>
    )
}

export default Gridview
