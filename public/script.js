// frontend.js
// Este archivo reemplaza el uso de localStorage
// y conecta directamente con tu backend en Clever Cloud o localhost

// Cambia la URL si tu backend no está en localhost
const BASE_URL = "http://localhost:2999";

// --------------------- REGISTER ---------------------
async function register() {
  const user = document.getElementById("regUser").value.trim();
  const pass = document.getElementById("regPass").value.trim();

  if (!user || !pass) {
    alert("Debes completar usuario y contraseña");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Usuario registrado en la base de datos");
      location.href = "login.html";
    } else {
      alert("Error al registrar usuario. Tal vez ya existe.");
    }
  } catch (error) {
    console.error("Error al registrar:", error);
    alert("No se pudo conectar al servidor");
  }
}

// --------------------- LOGIN ---------------------
async function login() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (!user || !pass) {
    alert("Debes completar usuario y contraseña");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Login correcto");
      // Aquí podrías redirigir a otra página protegida
      // location.href = "home.html";
    } else {
      alert("Datos incorrectos");
    }
  } catch (error) {
    console.error("Error al loguear:", error);
    alert("No se pudo conectar al servidor");
  }
}