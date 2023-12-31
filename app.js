const http = require('http'),
  fs = require('fs'),
  express = require('express');

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

