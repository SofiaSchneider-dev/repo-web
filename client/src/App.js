import React from "react";
import { useEffect, useState } from "react";
function App(){

  const [backendData, setBackendData] = useState([{}])
  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])


  return (
    <div>
      {
        (typeof backendData.Nombres === "undefined") ? (
          <p>Cargando...</p>
        ):(
          backendData.Nombres.map((nombre,i)=> (
            <h2 key = {i}>{nombre}</h2>
          ))
        )
      }
    </div>
  )
};



export default App;