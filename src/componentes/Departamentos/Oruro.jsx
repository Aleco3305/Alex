import Card from '../Card'
import image from '../../imagen/image.png';

function Oruro() {
  const lista = [
    { id: 1, src: image, alt: "Oruro", titulo: "Bienvenido a Oruro", descripcion: "Ciudad folclórica de Bolivia" }
  ];

  const item = lista.find(d => d.id === 1);

  return (
    <div>
      {item && (
        <Card 
          src={item.src} 
          alt={item.alt} 
          titulo={item.titulo} 
          descripcion={item.descripcion} 
        />
      )}
    </div>
  );
}

export default Oruro;