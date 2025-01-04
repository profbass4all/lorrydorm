import { NavLink } from "react-router-dom"

function NotFound() {
  return (
    <div className="mx-auto my-24 w-11/12">

        <h1 className="text-3xl font-bold">You got lost in the jungle?, sorry about that 😃</h1>


        <NavLink to={'/'} 
              className='bg-[#161616] text-2xl font-bold block text-center text-[#fff] w-100 py-4 mt-4 rounded-md'>Return to home 👨‍🦽‍➡️
        </NavLink>

    </div>
  )
}

export default NotFound