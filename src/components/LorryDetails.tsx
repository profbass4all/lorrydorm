import { NavLink, useLocation, useParams } from 'react-router-dom'
import {data} from '../data'

function LorryDetails() {

    const {id} = useParams()
    const location = useLocation()
console.log(location)
    const lorry = data.find(item => item.id === id)
    if(!lorry) throw new Error

    const search = location.state? location.state.search: ''
    const type = location.state? location.state.type : ''

  return (
    <div style={{
        width: '90%',
        paddingTop: '2rem',
        margin: '0 auto'
    }}>
        <NavLink to={`../?${search}`} relative='path'>&larr; <span style={{
            borderBottom: '2px solid #201F1D',
        }}>Back to {type != 'null' ? `${type}`: 'all'} lorries</span></NavLink>

        <div style={{
            marginTop: '3em',
            marginBottom: '3em',
        }}>
            <img src={lorry.imageUrl} style={{borderRadius: '0.6em'}} />

        </div>
        
        <button className={`van-type`}>{lorry.type}</button>
        <div>
            <h1 style={{
                fontSize: '2em',
                fontWeight: 'bold',
                color: '#161616',
                marginTop: '0.5em',
                marginBottom: '0.2em'
            }}>{lorry.name}</h1>
            <p>
                <span style={{
                fontSize: '1.5rem',
                fontWeight: '600'
            }}>${lorry.price}</span>/day
            
            </p>
            <p style={{
                margin: '0.9em 0'
            }}>{lorry.description}</p>

            <button className='py-2 px-4 rounded mb-20' style={{
                color: 'white',
                backgroundColor: '#FF8C38',
                width: '100%',
                fontWeight: '600'

            }}>Rent this lorry</button>
        </div>
    </div>
  )
}

export default LorryDetails
