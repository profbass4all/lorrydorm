import { NavLink, useSearchParams } from 'react-router-dom'
import {data} from '../data'
import {  useState } from 'react'
function Lorry() {

  const [lorry] = useState(data)
  const [searchParams, setSearchParams] = useSearchParams('')

  console.log('searchParams',searchParams.get('type'))

  const filter = searchParams.get('type')

  // useEffect(()=>{
  //   async function getLorries(){
  //     const response = await fetch('https://api.example.com/lorry')
  //     const data = await response.json()
  //     setLorry(data)
  //   }
  // }, [])
const filteredList = filter? lorry.filter(item => filter === item.type.toLowerCase()): lorry


  const lorryElement = filteredList.map(item =>{
    return(
      <NavLink key={item.id} style={{
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'start',
            paddingBottom: '2rem',
          }}
            to={item.id}
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
        </div> 

    </div>
  )
}

export default Lorry