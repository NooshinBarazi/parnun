import { useState } from 'react'
import './App.css'
import './index.css'
import Home from './component/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Home />
  )
}

export default App
