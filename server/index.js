const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  res
    .status(200)
    .send({ user_data: req.body, message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
