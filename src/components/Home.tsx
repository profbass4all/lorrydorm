import { Link } from 'react-router-dom'
import heroImg from '../assets/images/home-hero.png'
function Home() {
  return (

    <>

    <div className='relative block'>
      <img src={heroImg} className='h-96 block' style={{filter: 'brightness(50%)'}} alt="hero" />

      
      <div className='w-11/12 mx-auto block absolute top-2/4 left-2/4' style={
                {

                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',    
                }
            }>
        <h2 className='text-white font-semibold text-4xl'>You got the travel plans, we got the travel lorry.</h2>


        <p className='text-white mt-6 font-normal'>Add adventure to your life by joining the #lorrydorm movement. Rent the perfect lorry to make your perfect road trip.</p>


        <Link to={'lorry'} className='bg-[#ff8c38] w-full h-14 items-center flex justify-center text-white mt-12 rounded'>Find your lorry</Link>


      </div>
    </div>

    </>
    
  )
}

export default Home