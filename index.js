import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static('public'));






app.get("/", async (req, res) => {
  try {
    const joke = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    res.render("index.ejs", {
      question: joke.data.setup,
      answer: joke.data.delivery
    });
  
    console.log(joke.data.setup);
    console.log(joke.data.delivery);
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.status(500).send("An error occurred while fetching the joke.");
  }
});



app.listen(port, () => {
  console.log("Application is running on port 3000")
})