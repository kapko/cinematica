//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/src/'));
// app.use(express.static('/'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/cinematica/'));
    app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/cinematica/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
