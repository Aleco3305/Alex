import BotonDog from "./componentes/BotonDog"
import './App.css'
import { useState } from "react"
import Registro from "./componentes/Registro"

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false) 

  return (

    <>
    <Registro isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
  
  
    <h1> Perrot</h1> 

      <BotonDog className="raza" nombreboton="Raza"/>

      <BotonDog className="contacto"  nombreboton= "Contacto"/>

      <BotonDog className="refugio" nombreboton= "Refugio"/>

    </>
  )
}

export default App
