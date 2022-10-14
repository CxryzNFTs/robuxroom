const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: path.join(__dirname)});
});

app.listen(3000, () => {
  console.log('App listening!');
});