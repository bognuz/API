import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static('public'));






app.get("/", async (req, res) => {

  const joke = await axios.get("https://v2.jokeapi.dev/joke/Any");
  res.render("index.ejs", {
    question: joke.data.setup,
    answer: joke.data.delivery
  });

  console.log(joke.data.setup);
  console.log(joke.data.delivery);
})



app.listen(port, () => {
  console.log("Application is running on port 3000")
})