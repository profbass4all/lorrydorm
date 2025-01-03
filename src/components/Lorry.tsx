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
        const response = await fetch('http://localhost:1624/all-lorries')
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
  <div style={{width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
          <ImSpinner9 style={{
          width: '5rem',
          color: 'red',
          height: '10rem',
        }}/>
  </div>)
}


const filteredList = filter? paginatedPages.filter(item => filter === item.type.toLowerCase()): paginatedPages


  const lorryElement = filteredList.map(item =>{
    return(
      <NavLink key={item.sn} style={{
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'start',
            paddingBottom: '2rem',
          }}
            to={String(item.sn)}
            state={{
              search: `${searchParams.toString()}`,
              type: `${filter}`
                  }}
          >
              <img src={item.imageUrl} style={{borderRadius: '0.5rem'}} />
              <h3 style={{
                fontWeight: '600',
                fontSize: '1.24rem'
              }}>{item.name}</h3>
              <p style={{fontSize:'1.5rem'}}>${item.price}/day</p>
              <button className={`van-type selected ${item.name}`}>{item.type}</button>
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

    <div style={{
        backgroundColor: '#FFF7ED',
        color: '#161616',
        paddingTop: '2em',
    }}>
        <div style={{
        width: '90%',
        margin: '0 auto',
        }}>

          <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
        }}>Explore our van options</h2>

        <section  className='btns' style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#4d4d4d',
          marginTop: '2em',
          paddingBottom: '3em',
          fontWeight: '500'
        }}>
          <button className={`simple ${filter === 'simple'? 'selected' : ''}`} onClick={()=>handleParams('type', 'simple')}>Simple</button>
          <button className={`luxury ${filter === 'luxury'? 'selected' : ''} `} onClick={()=>handleParams('type', 'luxury')}>Luxury</button>
          <button className={`rugged ${filter === 'rugged'? 'selected' : ''}`} onClick={()=>handleParams('type', 'rugged')}>Rugged</button>
          <div>
              {filter &&  <button onClick={()=> handleParams('type', null)} style={{borderBottom: '2px solid #4d4d4d'}}>Clear filters</button>}
  
          </div>          
        </section>

        <section style={{
          color: '#161616'
        }}>
          
          {lorryElement}

        </section>

        
        <PaginationButton  
          handlePrev={handlePrev}
          handleNext={handleNext}
          NumberOfPages={NumberOfPages}
          pageNumber={pageNumber}
    />

        </div> 

    </div>
  )
}

export default Lorry