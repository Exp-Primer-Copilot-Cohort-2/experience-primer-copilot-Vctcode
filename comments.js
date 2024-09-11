// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});