
const express = require('express');
const app = express();
const handler = require('./controller'); 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/getLease', handler.controller.getLease);
app.post('/login',handler.controller.login);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

