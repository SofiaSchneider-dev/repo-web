import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import PaginaLogin from "./components/PaginaLogin";
import PaginaProtegida from "./components/PaginaProtegida";


function App() {
  const [isLoggedIn, setLoggedin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PaginaLogin setLoggedin={setLoggedin} />}
        />
        <Route
          path="/loggedin"
          element={<PaginaProtegida isLoggedIn={isLoggedIn} setLoggedin={setLoggedin}/>}
        />
      </Routes>
    </Router>
  );
}


export default App;