// in sublime
let express = require(‘express’);
let port = process.env.PORT || 3000;
let app = express();
app.get(‘/’, function (req, res) {
 res.send(JSON.stringify({ Hello: ‘World’}));
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});