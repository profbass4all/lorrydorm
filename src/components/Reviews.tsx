import { FaStar } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { ReviewContext, StarsObject } from "../types";
import usePagination from "../hooks/usePagination";


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
const totalRating = reviews.reduce((acc, curr) => {
  return acc + curr.rating
},0)

const averageRating = totalRating/reviews.length

let rating = [];
    for(let star in starsObj){
        rating.push(<div key={star} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2em', color: '#4d4d4d', fontWeight: '600'}}>
              <p>{star} stars</p>
              <div style={{width: '70%', height: '0.7rem', backgroundColor: '#b9b9b9', borderRadius: '5px', display: 'flex', alignItems: 'center', }}>
                <div style={{
                  backgroundColor: '#FF8C38', 
                  width: `${((starsObj[star]/reviews.length) * 100).toFixed(1)}%`, 
                  height: '0.7rem',
                  borderRadius: '5px',
                  
                  }}></div>
              </div>
              <p>{((starsObj[star]/reviews.length) * 100).toFixed(1)}%</p>
            </div>)
  
  }


const reviewText = paginatedPages.map(review =>{
    
  let stars = Array(5).fill(<FaStar style={{fontSize: '1.5rem'}} />);


  return (

    <>
    <div className='my-6' key={review.sn} style={{display: 'flex'}}>

    {stars.fill(<FaStar color="#FF8C38" style={{fontSize: '1.5rem'}} />, 0, review.rating)}
    </div>
    <span style={{fontWeight: '700', marginRight: '0.5em'}}>{review.first_name}</span>
    <span style={{color:'#8c8c8c'}}>{review.date.slice(0,10)}</span>
    <p style={{fontWeight: '500', marginTop: '1em', borderBottom: '1px solid #c7c7c7', paddingBottom: '2em'}}>{review.text}</p>
    </>
  )
})

  return (

    <div className='mx-auto mt-10 mb-10' style={{width: '90%'}}>

      <h2><span style={{fontSize: '2rem', fontWeight: '700'}}>Your Reviews</span> <span style={{color: '#4d4d4d', fontWeight: '500', marginLeft: '1em'}}>last</span> <span style={{color: '#4d4d4d', fontWeight: '700', textDecoration: 'underline'}}>30 days</span></h2>


      <div className='my-4'>
        <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><span style={{fontSize: '2rem', fontWeight: '700'}} >{averageRating.toFixed(1)}</span><FaStar color="#FF8C38" style={{fontSize: '1.5rem'}}/><span style={{fontWeight: '600'}}>overall rating</span>
        </h3>
      </div>

      <div>

            {rating}

    </div>

    <div>

        <h3 style={{fontWeight: '700', fontSize: '1.25rem'}}>Reviews <span>({reviews.length})</span></h3>

        {reviewText}

    </div>

    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', gap: '1.5em', marginBottom:'2em', marginTop: '1.5em' }}>
          <button className="bg-orange-400 px-4 py-1 text-xl text-white rounded-xl" onClick={handlePrev}>Prev</button>
          <p>{pageNumber}/{NumberOfPages}</p>
          <button className="bg-orange-400 px-4 py-1 text-xl text-white rounded-xl" onClick={handleNext}>Next</button>
        </div>

    </div>
  )
}

export default Reviews