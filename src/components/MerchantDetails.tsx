import { useOutletContext } from "react-router-dom"

export interface LorryDetails {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  imageUrl: string;
  merchant_id: number;
  quantity: number;
}
function MerchantDetails() {

const {name, type, description} = useOutletContext<LorryDetails>()


  return (
    <div style={{color:'#161616' }}>

        <h2 className='mb-4 font-medium'><span className="font-bold" >Name: </span> {name}</h2>

        <h3 className='mb-4 font-medium'><span className="font-bold" >Category:</span> {type}</h3>

        <h4 className="font-medium"><span className="font-bold" >Description: </span> {description}</h4>
    </div>
  )
}

export default MerchantDetails
