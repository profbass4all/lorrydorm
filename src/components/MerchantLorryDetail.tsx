import { NavLink, Outlet, useParams } from 'react-router-dom'
import { data } from '../data'

function MerchantLorryDetail() {

    const activeSyles = {
        fontWeight: '900',
        textDecoration: 'underline',
        color: '#161616'
    }

    const {id} = useParams()

    const findDetails= data.find(item =>item.id === id)
    if(!findDetails) throw new Error(`Could not find`)

  return (
    <div style={{width: '90%'}} className='mx-auto mt-14'>

        <div style={{marginBottom: '2.5em'}}>
                <NavLink  to={`..`} relative='path'>&larr; <span style={{
            borderBottom: '2px solid #201F1D',
        }}>Back to all lorries</span></NavLink>
        </div>
        


        <div className='mb-16' style={{backgroundColor: '#fff', padding: '1.5em'}}>

            <div style={{display: 'flex', gap:'1.5rem', marginBottom:'2em'}}>
                <img src={findDetails.imageUrl} style={{width: '10rem', height:'10rem', borderRadius: '5px'}} />
                <div>
                    <button className='py-1 px-4 rounded mb-2' style={{backgroundColor: '#E17654', color:'#FFEAD0'}}>{findDetails.type}</button>
                    <h2 style={{color: '#161616', fontSize: '1.6875rem', fontWeight: '800'}}>{findDetails.name}</h2>
                    <p style={{fontWeight: '600'}}><span style={{fontWeight: '700', fontSize: '1.25rem'}}>${findDetails.price}</span>/day</p>
                </div>
            </div>

            <nav className='mb-6' style={{justifyContent: 'start'}}>

                <NavLink to={'.'} style={({isActive})=> isActive? activeSyles: {} } end>Details</NavLink>
                <NavLink to={'pricing'} style={({isActive})=> isActive? activeSyles: {} }>Pricing</NavLink>
                <NavLink to={'photos'} style={({isActive})=> isActive? activeSyles: {} }>Photos</NavLink>

            </nav>

        <Outlet context={findDetails} />


        </div>
    
    </div>
  )
}

export default MerchantLorryDetail