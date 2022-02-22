const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    } else {
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">back button</a>
    `)
    }
})

server.listen(5000)