import { NavLink } from "react-router-dom"

function NotFound() {
  return (
    <div className="mx-auto my-24" style={{
        width: '90%',
    }}>

        <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',

        }}>You got lost in the jungle?, sorry about that 😃</h1>


        <NavLink to={'/'}  style={{
            backgroundColor: '#161616',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            color: '#FFFFFF',
            width: '100%',
            padding: '0.8rem 0rem', 
            marginTop: '1rem',
            borderRadius: '5px',
        }}>Return to home 👨‍🦽‍➡️</NavLink>

    </div>
  )
}

export default NotFound