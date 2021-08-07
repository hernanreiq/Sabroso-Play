const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

//SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//ROUTES
app.use(require('./routes/'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//LISTENING
app.listen(PORT, '192.168.0.108', () => {
    console.log('Listeninig on port:', PORT);
});