import { useForm, SubmitHandler } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"

type Inputs = {
  email: string
  password: string
}

type setLoggingIn = {
  setIsLoggedIn: (value: boolean) => void
}
const Login = ({setIsLoggedIn}:setLoggingIn ) => {

const location = useLocation()
console.log('location: ', location)

  const { register, handleSubmit, formState: { errors, isSubmitting },} = useForm<Inputs>()
  const navigate = useNavigate()


  const loginSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (data.email === 'a@b.com' && data.password === 'p') {
        setIsLoggedIn(true);
        navigate(location.state?.comingFrom || '/host' , {replace: true})
      } else {
        setIsLoggedIn(false)
        alert('Invalid credentials');

      }
      resolve(true); // Resolves the Promise after completion
    }, 1000);
  });
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