import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaginaLogin = ({ setLoggedin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedin(true);
    nav("/loggedin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-fondo">
      <div className="bg-container p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white">Email:</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password:</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-1/2 py-2 bg-botonLogin text-white font-semibold rounded-md hover:bg-hoverBoton mx-auto block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaginaLogin;