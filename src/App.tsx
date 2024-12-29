import './App.css'
import Bodylayout from './components/Bodylayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Host from './components/Host'
import Lorry from './components/Lorry'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import LorryDetails from './components/LorryDetails'
import NotFound from './components/NotFound'
import HostLayout from './components/HostLayout'
import Dashboard from './components/Dashboard'
import Income from './components/Income'
import Lorries from './components/Lorries'
import Reviews from './components/Reviews'
import { useState } from 'react'
import MerchantLorryDetail from './components/MerchantLorryDetail'
import MerchantDetails from './components/MerchantDetails'
import MerchantPricing from './components/MerchantPricing'
import MerchantPhotos from './components/MerchantPhotos'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  // console.log( "setIsLoggedInssss", setIsLoggedIn)
  
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Bodylayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='lorry' element={<Lorry />} />
          <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='lorry/:id' element={<LorryDetails />} />
          <Route path='host' element={<HostLayout isLoggedIn={isLoggedIn} />} >
          
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='lorries' element={<Lorries />} />
              <Route path='lorries/:id' element={<MerchantLorryDetail />}>

                  <Route index element={<MerchantDetails />} />
                  <Route path='pricing' element={<MerchantPricing />} />
                  <Route path='photos' element={<MerchantPhotos />} />
              </Route>
              <Route path='reviews' element={<Reviews />} />

          </Route>



          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
