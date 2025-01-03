import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"

type Inputs = {
  email: string
  password: string
}

type LoggingType = {
  setIsLoggedIn: (value: boolean) => void,
  setToken: (value: string)=>void
}
const Login = ({setIsLoggedIn, setToken}:LoggingType ) => {

  const [error, setError] = useState('')


  const location = useLocation()

  const { register, handleSubmit, formState: { errors, isSubmitting },} = useForm<Inputs>()
  const navigate = useNavigate()


  const loginSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
        const response = await fetch('http://localhost:1624/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorResult = await response.json();
            throw new Error(errorResult.message || 'Something went wrong');
        }


        const token = response.headers.get('authorization')?.split(' ')[1] 
        if(!token) throw new Error('Token not found');

        setToken(token);
        
        const result = await response.json();
        if (result.status !== true) throw new Error(result.message);


        setIsLoggedIn(true);
        navigate(location.state?.comingFrom || '/host', { replace: true });
    } catch (error: any) {
        setError(error.message || 'An unexpected error occurred');
    }
};

  return (


    <div className="mt-6 mb-16 mx-auto w-11/12">

      <h1 className="mb-4 font-bold text-3xl text-center">Sign in to your account</h1>


      <form onSubmit={handleSubmit(loginSubmit)} className="flex flex-col">

            <input 
            
            className="block outline-none border-t border-t-[#d1d5db] border-solid border-x border-x-[#d1d5db] w-full font-semibold bg-white text-[#4d4d4d] py-2 px-4 rounded-tl-md rounded-tr-md"
            
            type="email" placeholder="Email address"  
            
            {...register("email", {required: 'Email is required'})} />

            {errors.email && <span className="text-red-700">{errors.email.message}</span>}

            <input 
            
            className="block outline-none border-t border-t-[#d1d5db] border-solid border-x border-x-[#d1d5db] w-full font-semibold bg-white text-[#4d4d4d] py-2 px-4 rounded-bl-md rounded-br-md border-b border-b-[#d1d5db]"  
            
            type="password" placeholder="Password"  
            
            {...register("password", {required: 'Password is required'})}  />

            {errors.password && <span className="text-red-700">{errors.password.message}</span>}

        {error? <p className="text-red-500">{error}</p>: ''}

        <button disabled={isSubmitting} type="submit"
        
        className="bg-[#ff8c38] mt-6 text-white py-4 rounded-md font-bold">
          
        {isSubmitting == true? 'Logging in..': 'Sign in'}</button>

        
      </form>

      <p className="text-center mt-12 text-[#161616]">Don't have an account?
        
        <span className="font-bold text-[#ff8c38]">Create one now</span></p>
        
    </div>
  )
}

export default Login


