import React, { useState } from 'react'
import '../../css/imagebox.css'

const Imagebox = ({img = [{url:""}]}) => {
    const [largeimg , setLargeImg]=useState(img[0].url)
    
  
    return (
        
        <div>
            <div className="leftside">
                <div className='smallimages'>
                    {img.map((currElem , index)=>{
                        return (
                            <div className='smallimg' onClick={()=>{
                                setLargeImg(currElem.url)
                            }}>
                                <img src={currElem.url} alt="" key={currElem.id}/>
                            </div>
                        )
                    })}
                   
                </div>
                <div className='largeimage'>
                    <div className='largeimg'>
                        <img src={largeimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Imagebox
