import { useState } from 'react'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Header />
    </div>

  )
}

export default App
