import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/");
    } else {
      // Decodificar token (o llamar al backend para verificarlo)
      fetch("http://localhost:5000/verify-token", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user))
        .catch(() => navigate("/"));
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <p>Bienvenido, {user.displayName}</p> : <p>Cargando...</p>}
    </div>
  );
};

export default Dashboard;
