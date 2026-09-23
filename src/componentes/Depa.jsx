import { Link } from 'react-router-dom'
import './Depa.css'


function Depa() {
  const imagen = [
    { id: 1, src: "image.png", alt: "Oruro", ruta: "/oruro" },
    { id: 2, src: "image.png", alt: "Boceto 2", ruta: "/la-paz" },
    { id: 3, src: "image.png", alt: "Boceto 3", ruta: "/cochabamba" },
    { id: 4, src: "image.png", alt: "Boceto 4", ruta: "/tarija" },
    { id: 5, src: "image.png", alt: "Boceto 5", ruta: "/santa-cruz" },
    { id: 6, src: "image.png", alt: "Boceto 6", ruta: "/beni" },
    { id: 7, src: "image.png", alt: "Boceto 7", ruta: "/chuquisaca" },
    { id: 8, src: "image.png", alt: "Boceto 8", ruta: "/pando" }

  ]

  return (
    <div className="contenedor-galeria">
      {imagen.map((img) => (
        <Link key={img.id} to={img.ruta}>
          <img
            src={img.src}
            alt={img.alt}
            className="Boseto"
          />
        </Link>
      ))}
    </div>
  )
}

export default Depa;
