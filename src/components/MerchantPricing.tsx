import { useOutletContext } from 'react-router-dom'
import { LorryDetails } from './MerchantDetails'
function MerchantPricing() {

  const {price} = useOutletContext<LorryDetails>()


  return (
    <div><span style={{fontSize: '1.5rem', fontWeight: '500'}}>${price}</span> /day</div>
  )
}

export default MerchantPricing