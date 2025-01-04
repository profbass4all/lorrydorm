import { FaStar } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { ReviewContext, StarsObject } from "../types";
import usePagination from "../hooks/usePagination";
import PaginationButton from "./PaginationButton";


function Reviews() {
    
  const {
    reviews,
    loadingB,
    errorB} = useOutletContext<ReviewContext>()

    
    if(loadingB || !reviews) return <h1>Loading...</h1>

    const {
      handlePrev,
          handleNext,
          paginatedPages,
          NumberOfPages,
          pageNumber,
    } = usePagination(reviews)
    


  if(errorB) return <h1>Error: {errorB}</h1>

  let starsObj: StarsObject ={}

  for (let i: number = 0; i < reviews.length; i++) {

  if(starsObj[reviews[i].rating]){
    starsObj[reviews[i].rating]+=1

  }else{
    starsObj[reviews[i].rating] = 1

  }
  
}
const totalRating = reviews.reduce((acc, curr): number => {
  return acc + curr.rating
},0)

const averageRating: number = totalRating/reviews.length

let rating = [];
    for(let star in starsObj){
        rating.push(<div key={star} 
        
          className="flex justify-between items-center mb-8 text-[#4d4d4d] font-semibold">

              <p>{star} stars</p>

              <div className="w-[70%] h-[0.7rem] bg-[#b9b9b9] rounded-md flex items-center">

                <div className= 'bg-[#ff8c38] h-3 rounded-md' 
                  style={{
                  width: `${((starsObj[star]/reviews.length) * 100).toFixed(1)}%`,       
                    }}>

                    </div>
              </div>
              <p>{((starsObj[star]/reviews.length) * 100).toFixed(1)}%</p>
            </div>)
  
  }


const reviewText = paginatedPages.map(review =>{
    
  let stars = Array(5).fill(<FaStar className="text-2xl"/>);


  return (

    <>
    <div className='my-6 flex' key={review.sn}>

    {stars.fill(<FaStar className="text-[#ff8c38] text-2xl" />, 0, review.rating)}

    </div>

    <span className="font-bold mr-2">{review.first_name}</span>

    <span className="text-[#8c8c8c]" >{review.date.slice(0,10)}</span>
    
    <p className="font-medium mt-4 border-solid border-b-2 border-[#c7c7c7] pb-8">{review.text}</p>

    </>
  )
})

  return (

    <div className='mx-auto mt-10 mb-10 w-11/12'>

      <h2><span className="text-3xl font-bold">Your Reviews</span> 
      
      <span className="font-medium text-[#4d4d4d] ml-2">last</span> 
      
      <span className="font-bold text-[#4d4d4d] underline decoration-solid ml-2">30 days</span></h2>


      <div className='my-6'>

        <h3 className="flex items-center gap-2">
          
          <span className="text-3xl font-bold">
            
            {averageRating.toFixed(1)}
          </span>
          <FaStar className="text-[#ff8c38] text-2xl"/>

          <span className='font-semibold'>overall rating</span>

        </h3>
      </div>

      <div>

            {rating}

    </div>

    <div>

        <h3 className="font-bold text-xl">Reviews <span>({reviews.length})</span></h3>

        {reviewText}

    </div>

    <PaginationButton  
          handlePrev={handlePrev}
          handleNext={handleNext}
          NumberOfPages={NumberOfPages}
          pageNumber={pageNumber}
    />

    </div>
  )
}

export default Reviews

