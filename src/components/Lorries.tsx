import { Link, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LorryType } from '../types'
import usePagination from '../hooks/usePagination'
import PaginationButton from './PaginationButton'

function Lorries() {
  const [lorries, setLorries] = useState<LorryType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const { token } = useOutletContext<{token: string}>()
  
  

  

  useEffect(() =>{
    async function getLorries(){
        try {
            setLoading(true)
            const response = await fetch('http://localhost:1624/lorries',{
                method: 'GET',
                headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    })

            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }

            const data = await response.json()
            setLorries(data.data)
        } catch (error: any) {
            setError(error.message)
        }finally {
            setLoading(false)
        }
    }

    getLorries()
}, [])


const {
      handlePrev,
          handleNext,
          paginatedPages,
          NumberOfPages,
          pageNumber,
    } = usePagination(lorries)

if(!lorries || loading){
    return (
      <div>Loading...</div>
    )
  }

  if(error){
    return (
      <div>Error: {error}</div>
    )
  }
  return (
    <div style={{width: '90%', margin: '2.5rem auto 4em', color: '#161616'}}>
      <h2 style={{fontWeight: '700', fontSize: '2rem', marginBottom:'1em'}}>Your listed lorries</h2>


      {
        paginatedPages.map(item =>{
          return (
            <Link to={item.sn.toString()} key={item.sn}>
          <div style={{display: 'flex', gap: '1em',background: '#fff', padding: '1em 1.6em', borderRadius: '5px',marginBottom:'1.2em' }}>
            <img src={item.imageUrl} style={{width: '4.125rem', height: '4.125rem', borderRadius: '5px'}}/>
            <div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600'}}>{item.name}</h3>
              <p style={{color: '#4d4d4d', fontWeight: '500'}}>${item.price}/day</p>
            </div>
          </div>
      
      </Link>


          )

          
        })
      }

      <PaginationButton  
          handlePrev={handlePrev}
          handleNext={handleNext}
          NumberOfPages={NumberOfPages}
          pageNumber={pageNumber}
    />
    </div>
  )
}

export default Lorries