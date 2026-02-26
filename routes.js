const express = require("express");
const router = express.Router();
const pool = require("./db");

// ── REGISTER ──────────────────────────────────────────────
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ ok: false, error: "Faltan campos" });
  }

  try {
    await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, password]
    );
    res.json({ ok: true });
  } catch (e) {
    console.error("Error en /register:", e.message); // 👈 verás el error real
    res.json({ ok: false, error: e.message });
  }
});

// ── LOGIN ──────────────────────────────────────────────────
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ ok: false, error: "Faltan campos" });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length > 0) {
      res.json({ ok: true });
    } else {
      res.json({ ok: false, error: "Usuario o contraseña incorrectos" });
    }
  } catch (e) {
    console.error("Error en /login:", e.message); // 👈 verás el error real
    res.json({ ok: false, error: e.message });
  }
});

module.exports = router;