const http = require('http');
const server = http.createServer((req, res) => {
    res.write('hello mr susan');
    res.end();
});
server.listen(5100);