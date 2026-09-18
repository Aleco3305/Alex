import Navar from "./componentes/Navar"
import Depa from "./componentes/Depa"
import Oruro from "./componentes/Departamentos/Oruro"
import Lapaz from "./componentes/Departamentos/Lapaz"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Navar />
      <BrowserRouter >
      <Routes>
        {/* Ruta principal donde se muestra la galería */}
        <Route path="/" element={<Depa />} />
        
        {/* Ruta a la que te llevará al hacer clic en Oruro */}
        <Route path="/oruro" element={<Oruro />} />
        
        {/* Agrega aquí las rutas para otros departamentos */}
        <Route path="/LaPaz" element={<Lapaz/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
