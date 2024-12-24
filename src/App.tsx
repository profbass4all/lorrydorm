import './App.css'
import Bodylayout from './components/Bodylayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Host from './components/Host'
import Lorry from './components/Lorry'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Bodylayout />}>
          <Route index element={<Home />} />
          <Route path='host' element={<Host />} />
          <Route path='about' element={<About />} />
          <Route path='lorry' element={<Lorry />} />
          <Route path='login' element={<Login />} />

        </Route>
      </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
