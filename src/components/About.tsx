import abouteImage from '../assets/images/about-hero.png'
function About() {

  const pstyle = {
            fontSize: '0.95em',
            fontWeight: '500',
            marginBottom: '1.3em',
          }


  return (

      <section style={
        {
            backgroundColor: '#FFF7ED',
            color: '#161616',
            paddingBottom: '1.3em'
        }
      }>
        <div>
          <img src={abouteImage} style={{height: '14rem', width: '100%'}}/>
        </div>

        <section style={
          { 
            width: '90%', 
            marginRight: 'auto',
            marginLeft: 'auto',
          }
              }>
          <h1 style={
            {
                fontSize: '2rem',
                lineHeight: '1.1em',
                fontWeight: '600',
                marginTop: '1.3em',
                marginBottom: '1em',
            }
          }>Don’t squeeze in a sedan when you could relax in a lorry.</h1>
          <p style={pstyle}>Our mission is to enliven your road trip with the perfect travel lorry rental. Our lorry are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
          <p style={pstyle}>Our team is full of lorrylife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </section>

        <section style={{
          backgroundColor: '#FFCC8D',
          width: '90%',
          margin: '0 auto',
          height: '12.375rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'start',
          paddingLeft: '2em',
          color: '#161616',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          <div>
            <h3>Your destination is waiting.</h3>
          <h4>Your van is ready.</h4>
          </div>
          <button className='py-2 px-4 rounded-2xl mb-2' style={{
            color: 'white',
            backgroundColor: '#161616',

          }}
          >Explore our lorries</button>
        </section>
      </section>


  )
}

export default About