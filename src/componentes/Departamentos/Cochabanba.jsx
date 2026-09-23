import Card from '../Card'

function Cochabamba (){

    return(
        <>
        <div style={{ padding: "20px", color: "white" }}>

      <h1>Bienvenido a Cochabamba</h1>
      <p>
        Aquí puedes escribir todo el contenido textual que quieras sin depender de ninguna imagen.
      </p>

      {/* Puedes usar el componente Card enviando solo texto */}
      <Card 
        titulo="Cochabamba" 
        descripcion="altura" 
      />
      
    </div>

        </>
        
    )

}
export default Cochabamba;