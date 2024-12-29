import { Link } from 'react-router-dom'
import heroImg from '../assets/images/home-hero.png'
function Home() {
  return (

    <>

    <div style={{position: 'relative', display: 'block'}}>
      <img src={heroImg} style={{height: '25rem', display: 'block', filter: 'brightness(50%)'}} alt="hero" />
      <div style={
                {
                  width: '90%', 
                  margin: '0 auto', 
                  position: 'absolute',
                  top : '50%',
                  left : '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
                  
                }
            }>
        <h2 style={{color: 'white', fontWeight: '600', fontSize: '2.25rem', lineHeight:'1.2'}}>You got the travel plans, we got the travel lorry.</h2>
        <p style={{color: 'white', marginTop: '1.2em', fontWeight: '400'}}>Add adventure to your life by joining the #lorrydorm movement. Rent the perfect lorry to make your perfect road trip.</p>
        <Link to={'lorry'} style={
                {
                  backgroundColor: '#FF8C38', 
                  width: '100%', 
                  height: '3.125em', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white',
                  marginTop: '3em',
                  borderRadius: '0.5em',
                }
          
          }>Find your lorry</Link>
      </div>
    </div>

    </>
    
  )
}

export default Home