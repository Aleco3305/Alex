import { Link } from 'react-router-dom'
import './Navar.css'
import Ave from '../imagen/Ave.png'
import Comida from '../imagen/Comida.png'
import Origen from '../imagen/Origen.png'

function Navar(){

    return (
    
    <>
  <header className="Barraprincipal">

      <Link className="hola" to="/">
        Bienvenido
      </Link>

        <nav className="Menu" > 

            <img src={Origen} alt="Origen" className='Origen' />
            <img src={Ave}  alt= "Ave" className='imagenAve'/>
            <img src={Comida} alt= "imagen" className='comida'/>

        </nav>

    </header>

    <footer>

    </footer>

    </>

    )
}

export default Navar;
