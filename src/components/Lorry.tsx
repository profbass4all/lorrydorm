import { NavLink, useSearchParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import { ImSpinner9 } from "react-icons/im";
import { LorryType } from '../types';
import usePagination from '../hooks/usePagination';
import PaginationButton from './PaginationButton';


function Lorry() {

  const [lorry, setLorries] = useState<LorryType[] >([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState<Boolean | null>(null)

  const {
    handlePrev,
        handleNext,
        paginatedPages,
        NumberOfPages,
        pageNumber,
  } = usePagination(lorry)

  useEffect(()=>{
    async function getLorries(){
      try {
        setLoading(true)
        const response = await fetch('https://lorrydorm-backend.onrender.com/all-lorries')
        if(!response.ok){
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()

      
      setLorries(data.data)

    
      } catch (error: any) {
        setError(error.message)
      }finally{
        setLoading(false)
      }
    } 
    getLorries()
  }, [])
  const [searchParams, setSearchParams] = useSearchParams('')

  const filter = searchParams.get('type')


if(loading || !lorry){
  return (
  <div className='w-11/12 mx-auto flex justify-center'>
          <ImSpinner9 className='w-20 text-orange-300 h-40'/>
  </div>)
}


const filteredList = filter? lorry.filter(item => filter === item.type.toLowerCase()): paginatedPages


  const lorryElement = filteredList.map(item =>{
    return(
      <NavLink key={item.sn} 
            className='flex flex-col gap-4 items-start pb-8' 
            to={String(item.sn)}
            state={{
              search: `${searchParams.toString()}`,
              type: `${filter}`
                  }}
          >
              <img src={item.imageUrl} className='rounded-md' />

              <h3 className='font-semibold text-2xl'>{item.name}</h3>

              <p className='text-2xl'>${item.price}/day</p>

              <button 
                    className={`h-8 py-5 flex justify-center items-center px-8 font-medium border-none rounded-md bg-[#e17654] text-[#ffead0] ${item.type}`}>{item.type}
              </button>
          </NavLink>
    )
  })
  

  const handleParams = (key: string, value: string| null)=>{
      setSearchParams(prev =>{

        if(value === null){
          prev.delete(key);
        }else{
          prev.set(key, value);
        }
        return prev
      })
  }

  if(error){
    return <h2>Error: {error}</h2>
  }
  return (

    <div className='bg-[#fff7ed] text-[#161616] pt-8'>
        <div className='w-11/12 mx-auto'>

          <h2 className='text-3xl font-bold'>Explore our van options</h2>

        <section   className='btns flex justify-between items-center text-[#4d4d4d] mt-8 pb-12 font-medium'>

          <button 
                className={`simple bg-[#ffead0] text-[#4d4d4d] py-2 px-4 rounded-md ${filter === 'simple'? 'selected' : ''}`} 
              onClick={()=>handleParams('type', 'simple')}>Simple
          </button>


          <button 
                className={`luxury bg-[#ffead0] text-[#4d4d4d] py-2 px-4 rounded-md ${filter === 'luxury'? 'selected' : ''} `} onClick={()=>handleParams('type', 'luxury')}>Luxury
          </button>

          <button 
                className={`rugged bg-[#ffead0] text-[#4d4d4d] py-2 px-4 rounded-md ${filter === 'rugged'? 'selected' : ''}`} onClick={()=>handleParams('type', 'rugged')}>Rugged
          </button>

          <div>
              {filter &&  <button onClick={()=> handleParams('type', null)}     className='border-b-2 border-solid border-[#4d4d4d]'>Clear filters</button>}
  
          </div>          
        </section>

        <section className='text-[#161616]'>
          
          {lorryElement}

        </section>

        
        {!filter && <PaginationButton  
          handlePrev={handlePrev}
          handleNext={handleNext}
          NumberOfPages={NumberOfPages}
          pageNumber={pageNumber}
    />}

        </div> 

    </div>
  )
}

export default Lorry