let express = require('express');

let app = express();

let router = require('./routes');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', router);

app.listen(9000, function() {
    console.log('Runnings on port 9000');
})