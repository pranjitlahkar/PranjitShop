import React, { useContext } from 'react'
import "../../css/featureproduct.css"
import { storeContext } from '../../context/Storecontext'
import Productsmap from './Productsmap';

const Featureproduct = () => {

    const { isLoading , featuredProducts } = useContext(storeContext);

    if (isLoading ) {
        return <div> .... loading ....</div>

    }



    return (
        <div className='outerbox'>
            <div className='Feathead'><h1>Our Featured Products</h1>
                <p>Explore now</p>
            </div>
            <div className='featproductcont'>
                {
                    featuredProducts.map((currElem)=>{

                        return  <Productsmap key={currElem.id} {...currElem}/>

                    })
                }
            </div>
           

        </div>
    )
}

export default Featureproduct
