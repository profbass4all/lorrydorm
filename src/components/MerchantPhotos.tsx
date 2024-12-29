import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { LorryDetails } from './MerchantDetails'

function MerchantPhotos() {

  const {imageUrl} = useOutletContext<LorryDetails>()
  return (
    <div><img src={imageUrl}  style={{width: '6.5rem', height: '6.5rem', borderRadius:'5px'}}/></div>
  )
}

export default MerchantPhotos