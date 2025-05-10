const express = require("express");
const cors = require("cors");
const booksRouter = require("./books");

// define port to be used by application
const PORT = 5000;

// initialise express application
const app = express();
// enable cors moddleware
app.use(cors());
// enable express to read data from frontend via request body
app.use(express.json());

app.use("/book", booksRouter);

// assign port to the application by using listen function
app.listen(PORT, () => console.log("Server running on port " + PORT));

// sample endpoint
app.get("/", (req, res) => {
  res.send("Hello world");
});
