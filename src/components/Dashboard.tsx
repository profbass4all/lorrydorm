import { FaStar } from "react-icons/fa";
import { Link, useOutletContext } from 'react-router-dom'
import Lorries from "./Lorries";
import { IncomeContext } from "../types";


function Dashboard() {
  const { netIncome, transaction, loading, error } = useOutletContext<IncomeContext>()


  if(loading || !transaction || !netIncome) {
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }

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

      <div className='mt-14 py-6' style={{
        
        backgroundColor: '#FFEAD0'
      }}>

      <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto',display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',}}>

      
      <div >
        <h2 style={{fontSize: '2.25rem', color:'#161616' ,fontWeight: '700', marginBottom: '0.5em' }}>Welcome!</h2>
        <p style={{color: '#4d4d4d', fontWeight: '500', marginBottom: '0.5em'}}>Income in the last <span style={{fontWeight: '700'}}>30 days</span></p>
        <span style={{fontSize: '3rem', fontWeight: '1000', color: '#161616'}}>{formatter.format(total)}</span>
      </div>
      <div>
        <Link to={'income'} style={{color: '#161616', fontWeight: '600'}}>Details</Link>
      </div>
      
      </div>

    </div>

    <div className='py-12' style={{
        
        backgroundColor: '#FFDDB2'
      }}>
      <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto',display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <h3 style={{fontSize: '1.5rem', color:'#161616' ,fontWeight: '700'}}>Review Score</h3>

          <div style={{display: 'flex', alignItems: 'center', gap:'0.3rem'}}>
            <FaStar color="#FF8C38" style={{fontSize: '1.5rem'}}/>
          <span style={{fontSize: '1.25rem', color: '#161616', fontWeight: '800'}}>5.0<span style={{fontWeight: '600', color: '#4d4d4d'}}>/5</span></span>
          </div>
          


        </div>
        <div>
          <Link to={'reviews'} style={{color: '#161616', fontWeight: '600'}}>Details</Link>
        </div>
      </div>
    </div>
    
    <Lorries />
    </>
    
  )
}

export default Dashboard