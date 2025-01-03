import { FaStar } from "react-icons/fa";
import { Link, useOutletContext } from 'react-router-dom'
import { DashboardContext } from "../types";


function Dashboard() {
  const { netIncome, transaction, loading, error, reviews } = useOutletContext<DashboardContext>()


  if(loading || !transaction || !netIncome || ! reviews) {
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  const totalRating = reviews.reduce((acc, curr) => {
  return acc + curr.rating
},0)

const averageRating = totalRating/reviews.length

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

  const total = netIncome.reduce((acc, curr)=>{
        return acc + Number(curr.Amount)
      }, 0)
  
  return (

    <>

      <div className='mt-14 py-6 bg-[#ffead0]'>

      <div className="w-11/12 mx-auto flex justify-between items-center">

      
      <div >
        <h2 className="text-4xl text-[#161616] font-bold mb-4">Welcome!</h2>

        <p className="text-[#4d4d4d] font-medium mb-4">Income in the last <span style={{fontWeight: '700'}}>30 days</span></p>

        <span className="text-5xl font-black text-[#161616]">{formatter.format(total)}</span>
      </div>
      <div>
        <Link to={'income'} className="text-[#161616] font-semibold">Details</Link>
      </div>
      
      </div>

    </div>

    <div className='py-12 bg-[#ffddb2]'>

      <div className="w-11/12 mx-auto flex justify-between items-center">

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>

          <h3 style={{fontSize: '1.5rem', color:'#161616' ,fontWeight: '700'}}>Review Score</h3>

          <div className="flex items-center gap-1.5">

            <FaStar className="text-[#ff8c38] text-2xl" />

          <span className="text-2xl text-[#161616] font-extrabold">
          
          {averageRating.toFixed(1)}<span className="font-semibold text-[#4d4d4d]">/5</span></span>
          </div>
          


        </div>
        <div>
          <Link to={'reviews'} className="text-[#161616] font-semibold">Details</Link>
        </div>
      </div>
    </div>
        
    </>
    
  )
}

export default Dashboard