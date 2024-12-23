import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div>
      <h1>Inicia sesión</h1>
      <button onClick={handleGoogleLogin}>Login con Google</button>
    </div>
  );
};

export default Login;
