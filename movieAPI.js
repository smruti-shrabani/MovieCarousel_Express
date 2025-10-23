const express = require("express");
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json(),cors());
const data = require("./Json-data/movie-data.json");

app.get("/",(req,res)=>
{
  res.send({msg:"/movies for all movies list and /movies/ID for valid id input"})
})

app.get("/movies", (req, res) => {
  res.send(data);
});

app.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const searchData = data.find((i) => i.id == movieId);
  if (searchData) {
    res.send(searchData);
  } else {
    //impelement 404 not found with a json
    res.send({msg:"No data with this ID"});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
