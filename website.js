const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res) =>{
    console.log(req.url);
    
    res.setHeader('Content-Type', 'text/html')
    
    if (req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else if(req.url == '/contact'){
        res.statusCode = 200;
    res.end('<h1> This is Faraz</h1> <p> Hey there </p> ');
    }
    
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is About</h1> <p> Hey there About Page </p> ');
        }

    else {
        res.statusCode = 404;
        res.end('<h1> PAge Not Found</h1> <p> Cannot find page </p> ');
        }
} )

server.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})

