import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static('public'));






app.listen(port, () => {
  console.log("Application is running on port 3000")
})