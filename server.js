var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();

var port = process.env.PORT || 8082; 

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, console.log(`listening on port ${port}`));
