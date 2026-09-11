import './Depa.css'

function Depa(){

    const imagen = [
        { id: 1, src: "image.png", alt: "Boceto 1" },
        { id: 2, src: "image.png", alt: "Boceto 2" },
        { id: 3, src: "image.png", alt: "Boceto 3" },
        { id: 4, src: "image.png", alt: "Boceto 4" },
    ]

    return(
        <>
         <div className="contenedor-galeria">
            
                {imagen.map((img) => (
                    <img 
                        key={img.id} 
                        src={img.src} 
                        alt={img.alt} 
                        className="Boseto" 
                    />
                ))}
            </div>

        </>
    )   

}

export default Depa;
