const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("../db"); // adjust path

const app = express();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "movies",
  password: "1805",
  port: 5432,
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send({
    msg: "/movies for all movies list and /movies/ID for valid id input",
  });
});

app.get("/movies", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM movies_data");
    res.send(result.rows);
  } catch (err) {
    res.status(500).send({ msg: "Database error" });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM movies_data WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length > 0) {
      res.send(result.rows[0]);
    } else {
      res.status(404).send({ msg: "No data with this ID" });
    }
  } catch (err) {
    res.status(500).send({ msg: "Database error" });
  }
});

module.exports = app;