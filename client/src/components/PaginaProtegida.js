import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./header";

const PaginaProtegida = ({ isLoggedIn , setLoggedin}) => {

  const [vinos, setVinos] = useState([]);
  const [vinoFiltrado, setVinoFiltrado] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [buscador, setBuscador] = useState("");

  const vinosPorPagina = 5;

  useEffect(() => {
    const vinoRandom = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/wines/sparkling");
      const data = await response.json();
      setVinos(data.slice(0,30));
      setVinoFiltrado(data.slice(0,30));
    } catch(error){
      alert("Error fetcheabdo el vino");
    }
    // if (data.length >0){
    //   const indiceRandom = Math.floor(Math.random() * data.length);
    //   setVino(data[indiceRandom]);
    // }
  };
  vinoRandom();
  }, []);

  useEffect(()=> {
    if(buscador === ""){
      setVinoFiltrado(vinos);
    } else{
      const filtrado = vinos.filter((vino)=>
        (vino.winery && vino.winery.toLowerCase().includes(buscador.toLowerCase())) ||
      (vino.wine && vino.wine.toLowerCase().includes(buscador.toLowerCase()))
);
setVinoFiltrado(filtrado);
setPagina(1);
    }
  }, [buscador,vinos]);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const ultimoIndice = pagina * vinosPorPagina;
  const primerIndice = ultimoIndice - vinosPorPagina;
  const items = vinoFiltrado.slice(primerIndice,ultimoIndice);

  return (
    <div className="min-h-screen flex flex-col bg-container">
      <Header setLoggedin={setLoggedin}/>
    <div className="p-6">
      {/* <div className="bg-fondo p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-black mb-6">¡Iniciaste sesion!</h1>
        <p className="text-black">Entrasre a la pagina</p>
      </div> */}
      {/* <button
          onClick={vinoRandom}
          className="mt-6 bg-fondo text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Randomizar Vino
        </button> */}
        <input
        type="text"
        placeholder="busca un vino"
        value={buscador}
        onChange={(e)=> setBuscador(e.target.value)}
        className="block w-full p-2 mb-4 border rounded-lg"/>
        
        <div className="grid grid-cols-5 gap-4 p-2">
          {items.length > 0 ? (
            items.map((vino, index) => (
              <div key={index} className="bg-fondo p-6 rounded-lg shadow-lg text-center h-[500px] flex flex-col justify-between ">
                <h2 className="text-md font-bold text-white h-[200px] overflow-hidden">{vino.winery} - {vino.wine}</h2>
                <img src={vino.image} alt={vino.wine} className="w-full h-[150px] object-contain my-2" />
                <p className="text-white">Rating: {vino.rating.average} ⭐️ ({vino.rating.reviews})</p>
                <p className="text-gray-300">{vino.location}</p>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-5">No se encontró ese resultad</p>
          )}
        </div>

        {vinoFiltrado.length > vinosPorPagina && (
          <div className="flex justify-center space-x-2 mt-6">
            <button
              onClick={() => setPagina(pagina - 1)}
              disabled={pagina === 1}
              className={`px-4 py-2 rounded-md ${pagina === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-500"}`}
            >
              Anterior
            </button>
            <span className="text-white px-4 py-2">{pagina} / {Math.ceil(vinoFiltrado.length / vinosPorPagina)}</span>
            <button
              onClick={() => setPagina(pagina + 1)}
              disabled={pagina === Math.ceil(vinoFiltrado.length / vinosPorPagina)}
              className={`px-4 py-2 rounded-md ${pagina === Math.ceil(vinoFiltrado.length / vinosPorPagina) ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-500"}`}
            >
              Siguiente
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default PaginaProtegida;