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
            const response = await fetch('https://lorrydorm-backend.onrender.com/lorries',{
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
    <div className='w-11/12 mt-12 mx-auto mb-16 text-[#161616]'>

      <h2 className='font-bold text-3xl mb-4'>Your listed lorries</h2>


      {
        paginatedPages.map(item =>{
          return (

            <Link to={item.sn.toString()} key={item.sn}>

              <div className='flex gap-4 bg-white py-4 px-2 rounded-md mb-6'>

                <img src={item.imageUrl} className='w-18 h-16 rounded-md'/>

                <div>
                  <h3 className='text-xl font-semibold'>{item.name}</h3>

                  <p className='text-[#4d4d4d] font-medium'>${item.price}/day</p>
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