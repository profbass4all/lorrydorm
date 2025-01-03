import abouteImage from '../assets/images/about-hero.png'
function About() {

  return (

      <section className='bg-[#fff7ed] text-[#161616] pb-2'>
        <div>
          <img src={abouteImage} className='h-60 w-full'/>
        </div>

        <section className='mx-auto w-11/12'>

          <h1 className='text-4xl font-semibold mt-6 mb-4 '>Don’t squeeze in a sedan when you could relax in a lorry.</h1>

          <p className='text-base font-medium mb-6'>Our mission is to enliven your road trip with the perfect travel lorry rental. Our lorry are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>

          <p className='text-base font-medium mb-6'>Our team is full of lorrylife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </section>

        <section className='bg-[#ffcc8d] w-11/12 mx-auto h-48 flex flex-col items-start pl-8 text-[#161616] text-2xl font-bold justify-around'>

          <div>
            <h3>Your destination is waiting.</h3>
          <h4>Your van is ready.</h4>
          </div>

          <button className='py-2 px-4 rounded-2xl mb-2 text-white bg-[#161616'>Explore our lorries</button>
          
        </section>
      </section>


  )
}

export default About