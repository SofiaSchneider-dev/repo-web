import React from "react";
import { Navigate } from "react-router-dom";
import Header from "./header";

const PaginaProtegida = ({ isLoggedIn , setLoggedin}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-container">
      <Header setLoggedin={setLoggedin}/>
    <div className="min-h-screen flex items-center justify-center bg-container">
      <div className="bg-fondo p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-black mb-6">¡Iniciaste sesion!</h1>
        <p className="text-black">Entrasre a la pagina</p>
      </div>
      </div>
    </div>
  );
}

export default PaginaProtegida;