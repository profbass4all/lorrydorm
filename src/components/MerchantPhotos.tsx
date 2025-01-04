import { useOutletContext } from 'react-router-dom'
import { LorryDetails } from './MerchantDetails'

function MerchantPhotos() {

  const {imageUrl} = useOutletContext<LorryDetails>()
  return (
    <div><img src={imageUrl} className='w-26 h-26 rounded-md' /></div>
  )
}

export default MerchantPhotos