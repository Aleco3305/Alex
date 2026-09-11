function Card({ src, alt, titulo, descripcion }) {
  return (

    <div className="card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
      <img src={src} alt={alt} style={{ width: '100%', borderRadius: '4px' }} />
<h1>{img}</h1>

    </div>
  );
}

export default Card;