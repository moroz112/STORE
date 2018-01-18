var express = require('express');

var app = express();

var artists = [
    {
        id: 1,
        name: 'metallica'
    }
    ,
    {
        id: 2,
        name: 'Iron maiden'
    }
];

app.get('/', function(req, res) {
   res.send('Hello API')
});

app.listen(3012, function() {
    console.log('API app started')
});
app.post('/artists', function(req, res) {
    console.log('atya');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(artists);
});