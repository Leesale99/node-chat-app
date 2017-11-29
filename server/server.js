const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(3000, () => {
  console.log(`Serveris up on ${port}`);
});
