// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import Host from './Host'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { TransactionType, IncomeType, ReviewsType } from '../types'

function HostLayout({isLoggedIn, token}: {isLoggedIn: boolean, token: string}) {
    const [transaction, setTransaction] = useState<TransactionType[] | null>(null)
    const [netIncome, setNetIncome] = useState<IncomeType[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean | null>(null)


    const [reviews, setReviews] = useState<ReviewsType[] | null>(null)
    const [loadingB, setLoadingB] = useState<boolean | null>(null)
    const [errorB, setErrorB] = useState<boolean | null>(null)
    const location = useLocation()


    if (!isLoggedIn) {
        return(
            <Navigate 
                        to={'../login'}
                        state= {{
                            message: 'you must be logged in',
                            comingFrom: location.pathname
                        }}
                        replace
                />
        )
    }

    useEffect(()=>{
    async function getTransaction(){
        setLoading(true)
        try {
        const response = await fetch('http://localhost:1624/transactions', {
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
        
        setTransaction(data.data.transactions)
        setNetIncome(data.data.monthly_summary)
        setLoading(false)
        } catch (error: any) {
        setError(error.message)
        }finally {
        setLoading(false)
        }
    }

    getTransaction()
}, [])

    useEffect(()=>{
        async function getReviews(){
            try {
                setLoadingB(true)
                const response = await fetch('http://localhost:1624/reviews', {
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
                setReviews(data.data)
            } catch (error: any) {
                setErrorB(error.message)
            }finally{
                setLoadingB(false)
            }
        }

        getReviews()
    }, [])
return (
        <>
        
            <Host />
            <Outlet context={
                {
                    token, 
                    transaction, 
                    netIncome, 
                    loading, 
                    error,
                    reviews,
                    loadingB,
                    errorB
                    }    
                }/>
        </>
    )
}

export default HostLayout