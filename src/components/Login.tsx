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


    <div className="mt-6 mb-16 mx-auto" style={{width: '90%'}}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '0.8em',
      }}>Sign in to your account</h1>


      <form onSubmit={handleSubmit(loginSubmit)}  style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
            <input className="input-1" type="email" placeholder="Email address"  {...register("email", {required: 'Email is required'})} />

            {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}

            <input className="input-2" type="password" placeholder="Password"  {...register("password", {required: 'Password is required'})}  />

            {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
        {error? <p className="text-red-500">{error}</p>: ''}
        <button disabled={isSubmitting} type="submit"  style={{
          backgroundColor: '#FF8C38',
          marginTop: '1.3em',
          color: '#FFFFFF',
          padding: '0.8em 0',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>{isSubmitting == true? 'Logging in..': 'Sign in'}</button>

        
      </form>

      <p style={{
        textAlign: 'center',
        marginTop: ' 3em',
        color: '#161616'
      }}>Don't have an account? <span style={{color: '#FF8C38', fontWeight: '700'}}>Create one now</span></p>
    </div>
  )
}

export default Login