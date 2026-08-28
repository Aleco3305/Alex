import BotonDog from "./componentes/BotonDog"
import './App.css'
import { useState } from "react"

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false) 

  function logUser(){

    setIsLogedIn(!isLogedIn)
  }

  return (
    <>
    <h1>Registro de usuario</h1>
    <h1>{isLogedIn ? "El usuario esta logueados" : "El usuario NO esta logeado"}</h1>
    <button className = "log" onClick={logUser}> { isLogedIn ? "Cerrar sesion" : "Logearse"} </button>
  
    <h1> Perrot</h1> 

      <BotonDog className="raza" nombreboton="Raza"/>

      <BotonDog className="contacto"  nombreboton= "Contacto"/>

      <BotonDog className="refugio" nombreboton= "Refugio"/>

    </>
  )
}

export default App
