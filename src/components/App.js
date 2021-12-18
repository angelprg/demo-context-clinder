import React, {useState} from 'react'
import Catalog from './Catalog'
import Navbar from './Navbar'

const App = () => {
  const [likes, setLikes] = useState(0)
  return (
    <div>
      <Navbar />
      <div className="text-center m-4"><h1>❤️Clinder❤️</h1></div>
      <Catalog />
    </div>
  )
}

export default App
