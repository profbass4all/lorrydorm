import { NavLink, Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LorryType } from '../types'

function MerchantLorryDetail() {
    const [lorry, setLorry] = useState<LorryType | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)
    const {id} = useParams()

    if(!id){
        return
    }

    
    useEffect(() =>{
        async function getLorries(){
            try {
                setLoading(true)
                const response = await fetch(`https://lorrydorm-backend.onrender.com/lorry/${id}`,{
                    method: 'GET',
                    headers: {
                                'Content-Type': 'application/json',
                            },
                        })
    
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
    
                const data = await response.json()
                setLorry(data.data)
            } catch (error: any) {
                setError(error.message)
            }finally {
                setLoading(false)
            }
        }
    
        getLorries()
    }, [])




    const activeSyles = {
        fontWeight: '900',
        textDecoration: 'underline',
        color: '#161616'
    }

    if(loading || !lorry){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }


return (
    <div className='mx-auto mt-14 w-11/12'>

        <div className='mb-12'>

                <NavLink to={`..`} relative='path'>&larr; <span 
                    className='border-solid border-b-2 border-[#201f1d]'>Back to all lorries</span>
                </NavLink>
        </div>
        


        <div className='mb-16 bg-[#fff] p-6'>

            <div className='flex gap-6 mb-8'>

                <img src={lorry.imageUrl} className='w-48 h-48 rounded-md'/>

                <div>
                    <button className='py-1 px-4 rounded mb-2 bg-[#e17654] text-[#ffead0]'>{lorry.type}</button>


                    <h2 className='text-2xl text-[#161616] font-extrabold'>{lorry.name}</h2>

                    <p className='font-semibold'><span className='font-bold text-2xl'>${lorry.price}</span>/day</p>
                </div>
            </div>

            <nav className='mb-6 justify-start'>

                <NavLink to={'.'} style={({isActive})=> isActive? activeSyles: {} } end>Details</NavLink>

                <NavLink to={'pricing'} style={({isActive})=> isActive? activeSyles: {} }>Pricing</NavLink>
                
                <NavLink to={'photos'} style={({isActive})=> isActive? activeSyles: {} }>Photos</NavLink>

            </nav>

        <Outlet context={lorry} />


        </div>
    
    </div>
    )
}

export default MerchantLorryDetail