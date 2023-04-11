import React from 'react'
import "../../css/star.css"


const Stars = ({rating}) => {
    const fullStar = <i className="fa-solid fa-star"></i>
    const blankStar= <i className="fa-regular fa-star"></i>
    const halfstar= <i className="fa-solid fa-star-half-stroke"></i>
   const ratingStar= Array.from({length:5},(elem , index)=>{
 
        let number = index+ 0.5
        // debugger;
        return <div key={index}>
            {
                rating >= index+1 ?(fullStar) : rating >=number ? (halfstar) : (blankStar)
            }

        </div>

    })
    console.log(rating)
  return (
    <div className='starbox'>
      {ratingStar}{rating}
    </div>
  )
}

export default Stars
