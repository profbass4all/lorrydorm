import { Link } from 'react-router-dom'
import { data } from '../data'
function Lorries() {
  return (
    <div style={{width: '90%', margin: '2.5rem auto 4em', color: '#161616'}}>
      <h2 style={{fontWeight: '700', fontSize: '2rem', marginBottom:'1em'}}>Your listed lorries</h2>


      {
        data.map(item =>{
          return (
            <Link to={item.id} key={item.id}>
          <div style={{display: 'flex', gap: '1em',background: '#fff', padding: '1em 1.6em', borderRadius: '5px',marginBottom:'1.2em' }}>
            <img src={item.imageUrl} style={{width: '4.125rem', height: '4.125rem', borderRadius: '5px'}}/>
            <div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600'}}>{item.name}</h3>
              <p style={{color: '#4d4d4d', fontWeight: '500'}}>${item.price}/day</p>
            </div>
          </div>
      
      </Link>
          )
        })
      }
    </div>
  )
}

export default Lorries