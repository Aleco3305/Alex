function Registro({isLogedIn , setIsLogedIn}){


    return (

    <>
        <h1>Registro</h1>
    
        <h1>{isLogedIn ? "El usuario esta logueados" : "El usuario NO esta logeado"}</h1>
    
        <button className = "log" onClick={() => setIsLogedIn(!isLogedIn)}> { isLogedIn ? "Cerrar sesion" : "Logearse"} </button>

    </>
    )
}

export default Registro;
