import { useState } from 'react'
import Home from './assets/Components/Home'
import Form from './assets/Components/Form'
import Services from './assets/Components/Services'
import Events from './assets/Components/Events'
import AboutUs from './assets/Components/AboutUs'
import News from './assets/Components/News'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />  
      <Services />
      <Events />
      <AboutUs />
      <Form />
      <News />
    </>
  )
}

export default App
