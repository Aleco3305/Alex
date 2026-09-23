import Card from '../Card'

function Beni() {
  return (
    <div style={{ padding: "20px", color: "white" }}>

      <h1>Bienvenido a Beni</h1>
      <p>
        Aquí puedes escribir todo el contenido textual que quieras sin depender de ninguna imagen.
      </p>

      {/* Puedes usar el componente Card enviando solo texto */}
      <Card 
        titulo="Capital Folclórica " 
        descripcion="Beni es famosa por su carnaval y su rica cultura." 
      />

      
    </div>
  )
}

export default Beni