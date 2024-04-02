const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors())
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  console.log(name, email, password, phoneNumber);
  res.status(200).send({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
