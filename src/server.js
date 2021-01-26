const express = require('express'); //create express variable;
const path = require('express');

const hostname = '0.0.0.0'; 
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

const app = express();

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));

});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});