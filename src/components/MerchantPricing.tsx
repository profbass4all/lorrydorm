import { useOutletContext } from 'react-router-dom'
import { LorryDetails } from './MerchantDetails'
function MerchantPricing() {

  const {price} = useOutletContext<LorryDetails>()


  return (
    <div><span className='text-2xl font-medium'>${price}</span> /day</div>
  )
}

export default MerchantPricing