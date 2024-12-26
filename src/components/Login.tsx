
const Login = () => {
  return (
    <div className="mt-6 mb-16 mx-auto" style={{width: '90%'}}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '0.8em',
      }}>Sign in to your account</h1>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
            <input className="input-1" type="email" placeholder="Email address" name="email"/>
            <input className="input-2" type="password" placeholder="Password" name="password"/>
        

        <button style={{
          backgroundColor: '#FF8C38',
          marginTop: '1.3em',
          color: '#FFFFFF',
          padding: '0.8em 0',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>Sign in</button>
      </form>

      <p >Don't have an account? <span>Create one now</span></p>
    </div>
  )
}

export default Login