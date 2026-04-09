// const express = require("express");
// const cors = require('cors')
// const bodyParser = require("body-parser");
// const pg = require("pg");

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "movies",
//   password: "1805",
//   port: 5432,
// });

// const app = express();
// const PORT = process.env.PORT || 3000;

// // app.use(express.json(),cors());
// // const data = require("./Json-data/movie-data.json");

// // app.get("/",(req,res)=>
// // {
// //   res.send({msg:"/movies for all movies list and /movies/ID for valid id input"})
// // })

// // app.get("/movies", (req, res) => {
// //   res.send(data);
// // });

// // app.get("/movies/:id", (req, res) => {
// //   const movieId = req.params.id;
// //   const searchData = data.find((i) => i.id == movieId);
// //   if (searchData) {
// //     res.send(searchData);
// //   } else {
// //     //impelement 404 not found with a json
// //     res.send({msg:"No data with this ID"});
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });

// db.connect();

// let movies = [];
// db.query("SELECT * FROM movies_data", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     movies = res.rows;
//   }
//   db.end();
// });


// // Middleware
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));


// app.get("/",(req,res)=>
// {
//   res.send({msg:"/movies for all movies list and /movies/ID for valid id input"})
// })

// app.get("/movies", (req, res) => {
//   if (movies.length === 0) {
//     res.status(500).send({ msg: "Failed to fetch movies from the database." });
//   } else {
//     res.send(movies);
//   }
// });

// app.get("/movies/:id", (req, res) => {
//   const movieId = req.params.id;
//   const searchData = movies.find((i) => i.id == movieId);
//   if (searchData) {
//     res.send(searchData);
//   } else {
//     //impelement 404 not found with a json
//     res.send({msg:"No data with this ID"});
//   }
// });

// module.exports = app;