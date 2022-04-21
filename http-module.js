const http = require('http');
const server = http.createServer((req, res) => {
    // res.write('hello mr teitope');
    // res.end();
    if(req.url === '/'){
        res.end('welcome to our home page');
    }

    if(req.url === '/about'){
        res.end('welcome to our about page');
    } 
        res.end(`
        <h1>OOPS!</h1>
        <p>life is good</p>
        <a href='/'>this is the link</a>
        `);
    
});
server.listen(5000);