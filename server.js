let express = require('express');
let serveStatic = require('serve-static');
 
let app = express();
 
app.use(serveStatic('www', {'index': ['index.html', 'index.htm']}));

//app.listen("8080");
app.listen("8080", '127.0.0.1');

console.log('Server started on 127.0.0.1:' + 8080);