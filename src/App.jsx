import { useState } from 'react'
import './App.css'
import Home from "./pages/home/home"
import List from "./pages/list/list"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Maillist from './components/maillist/maillist'
import Hotel from './pages/hotels/hotel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotel" element={<List/>}/>
      <Route path="/hotels" element={<Hotel/>}/>
  
    </Routes>
    
    </BrowserRouter>
  
  )
}

export default App
