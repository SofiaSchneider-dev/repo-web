import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./header";

const PaginaProtegida = ({ isLoggedIn , setLoggedin}) => {

  const [vino, setVino] = useState(null);

  const vinoRandom = async () => {
    const response = await fetch("https://api.sampleapis.com/wines/sparkling");
    const data = await response.json();

    if (data.length >0){
      const indiceRandom = Math.floor(Math.random() * data.length);
      setVino(data[indiceRandom]);
    }
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-container">
      <Header setLoggedin={setLoggedin}/>
    <div className="min-h-screen flex items-center space-x-4 justify-center bg-container">
      {/* <div className="bg-fondo p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-black mb-6">¡Iniciaste sesion!</h1>
        <p className="text-black">Entrasre a la pagina</p>
      </div> */}
      <button
          onClick={vinoRandom}
          className="mt-6 bg-fondo text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Randomizar Vino
        </button>
        {vino && (
          <div className="mt-6 bg-fondo p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-bold text-white">{vino.winery} - {vino.wine}</h2>
            <img src={vino.image} alt={vino.wine} className="w-full h-80 object-contain my-4" />
            <p className="text-black-700">Rating: {vino.rating.average} ⭐️ ({vino.rating.reviews})</p>
            <p className="text-gray-500">{vino.location}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaginaProtegida;