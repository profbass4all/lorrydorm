import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LorryType } from '../types'

function LorryDetails() {
    const [lorry, setLorry] = useState<LorryType | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)

    const {id} = useParams()
    const location = useLocation()

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

    // const lorry = data.find(item => item.id === id)
if(loading || !lorry){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    const search = location.state? location.state.search: ''
    const type = location.state? location.state.type : ''

    return (
    <div className='w-11/12 pt-8 mx-auto'>

        <NavLink to={`../?${search}`} relative='path'>&larr; <span className='border-solid border-b-2 border-[#201f1d]'>Back to {type != 'null' ? `${type}`: 'all'} lorries</span></NavLink>

        <div className='mt-12 mb-3'>
            <img src={lorry.imageUrl} className='rounded-md' />

        </div>
        
        <button className={`h-8 py-5 flex justify-center items-center px-8 font-medium border-none rounded-md bg-[#e17654] text-[#ffead0]`}>{lorry.type}</button>
        <div>
            <h1 className='text-3xl font-bold text-[#161616] my-8 mb-1'>
                {lorry.name}    
            </h1>

            <p>
                <span className='text-2xl font-semibold mb-8'>${lorry.price}</span>/day
            
            </p>

            <p className='mt-4'>{lorry.description}</p>

            <button className='py-2 px-4 rounded mt-12 mb-20 text-white bg-[#ff8c38] w-full font-semibold'>Rent this lorry</button>

        </div>
    </div>
    )
}

export default LorryDetails
