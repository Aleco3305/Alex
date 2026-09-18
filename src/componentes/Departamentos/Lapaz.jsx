import Card from '../Card'

function Lapaz (){

    return(
        <>
        <div style={{ padding: "20px", color: "white" }}>

      <h1>Bienvenido a La Paz</h1>
      <p>
        Aquí puedes escribir todo el contenido textual que quieras sin depender de ninguna imagen.
      </p>

      {/* Puedes usar el componente Card enviando solo texto */}
      <Card 
        titulo="paz " 
        descripcion="altura" 
      />

      
    </div>

        </>
        
    )

}
export default Lapaz;
