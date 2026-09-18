function Card({ src, alt, titulo, descripcion }) {
  return (
    <div className="card-contenedor">
      {/* Muestra la imagen ÚNICAMENTE si existe la propiedad 'src' */}
      {src && <img src={src} alt={alt} className="card-imagen" />}
      
      {titulo && <h2>{titulo}</h2>}
      {descripcion && <p>{descripcion}</p>}
    </div>
  )
}

export default Card