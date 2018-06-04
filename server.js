//Install express server
const express = require('express');
const path = require('path');

// Start the app by listening on the default Heroku port


const app = express();

app.listen(process.env.PORT || 8080);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/introsde'));

app.get('*', function (req, res) {
    const index = path.join(__dirname + '/dist/introsde/index.html');
    res.sendFile(index);
  });


