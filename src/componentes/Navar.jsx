import image from "../assets/image.png"
import casita from"../assets/casita.png"
import './Navar.css'


function Navar(){

    return (
    
    <>
    <header className="Barraprincipal">
        
        <h1 className="bienvenida"> Conoceme </h1>
        <img src={image} alt = "logo de la pagina" className="image" />
        <img src={casita} alt="casita" className="casita"/>
    </header>

<h2>origen</h2>
<h2>cultura</h2>
<h2>gastronomia</h2>

    </>

    )
}

export default Navar;
