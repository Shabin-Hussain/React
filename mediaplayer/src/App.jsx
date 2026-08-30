import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from'./pages/Watchhistory'

function App() {


  return (
    <>
    {/* / - base url */}
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<Watchhistory/>}/>

    </Routes>
      
    </>
  )
}

export default App
