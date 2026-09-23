import Navar from "./componentes/Navar"
import Depa from "./componentes/Depa"
import Oruro from "./componentes/Departamentos/Oruro"
import Lapaz from "./componentes/Departamentos/Lapaz"
import Cochabanba from "./componentes/Departamentos/Cochabanba"
import Tarija from "./componentes/Departamentos/Tarija"
import SantaCruz from "./componentes/Departamentos/Santacruz"
import Beni from "./componentes/Departamentos/Beni"
import Chuquisaca from "./componentes/Departamentos/Chuquisaca"
import Pando from "./componentes/Departamentos/Pando"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter >
      
       <Navar />
      
      <Routes>

        {/* Ruta principal donde se muestra la galería */}
        <Route path="/" element={<Depa />} />
  
        
        {/* Rutas individuales de cada departamento */}
        <Route path="/oruro" element={<Oruro />} />
        <Route path="/la-paz" element={<Lapaz />} />
        <Route path="/cochabamba" element={<Cochabanba />} />
        <Route path="/tarija" element={<Tarija />} />
        <Route path="/santa-cruz" element={<SantaCruz />} />
        <Route path="/beni" element={<Beni />} />
        <Route path="/chuquisaca" element={<Chuquisaca />} />
        <Route path="/pando" element={<Pando />} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
