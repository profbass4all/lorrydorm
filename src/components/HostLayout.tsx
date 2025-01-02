import Host from './Host'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function HostLayout({isLoggedIn}: {isLoggedIn: boolean}) {

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
  return (
        <>
        
            <Host />
            <Outlet />
        </>
  )
}

export default HostLayout