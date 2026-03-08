const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* ===============================
   TEST DATABASE CONNECTION
================================ */

pool.connect()
  .then(() => {
    console.log("PostgreSQL connected successfully");
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });

/* ===============================
   SERVE FRONTEND BUILD
================================ */

app.use(express.static(path.join(__dirname, "../frontend/radha-krishna-pg-management/dist")));

/* ===============================
   BOOK ROOM
================================ */

app.post("/book", async (req, res) => {

  const { name, phone, roomType, date } = req.body;

  try {

    await pool.query(
      "INSERT INTO bookings (name, phone, room_type, move_in_date) VALUES ($1,$2,$3,$4)",
      [name, phone, roomType, date]
    );

    res.json({ message: "Booking saved successfully" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Database error" });

  }

});

/* ===============================
   ADMIN LOGIN
================================ */

app.post("/admin/login", async (req, res) => {

  const { username, password } = req.body;

  try {

    const result = await pool.query(
      "SELECT * FROM admins WHERE username=$1 AND password=$2",
      [username, password]
    );

    if (result.rows.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

  } catch (err) {

    console.error(err);
    res.status(500).send("Server error");

  }

});

/* ===============================
   GET ROOMS
================================ */

app.get("/rooms", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM rooms ORDER BY id"
    );

    res.json(result.rows);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Database error" });

  }

});

/* ===============================
   UPDATE ROOM VACANCY
================================ */

app.put("/rooms/:id", async (req, res) => {

  const { id } = req.params;
  const { vacancy } = req.body;

  try {

    await pool.query(
      "UPDATE rooms SET vacancy = $1 WHERE id = $2",
      [vacancy, id]
    );

    res.json({ message: "Room updated successfully" });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Database error" });

  }

});

/* ===============================
   GET BOOKINGS
================================ */

app.get("/bookings", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM bookings ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Database error" });

  }

});

/* ===============================
   REACT ROUTING
================================ */

app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/radha-krishna-pg-management/dist/index.html")
  );
});

/* ===============================
   START SERVER
================================ */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

