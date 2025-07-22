console.log("1st Program NodeJs");

const http = require('http');
const { stringify } = require('querystring');
const url = require('url')

let products = [
    {id: 1, name: "Laptop", price: 3000},
    {id: 2, name: "mouse", price: 500},
    {id: 3, name: "Headphones, price: 480"}
]

const server = http.createServer((req, res) => {
    if(req.method == GET && req.url == "/")
        res.end(JSON.stringify(products));

    else if (req.method == "GET" && req.url.startsWith("/products/")) {
        let reqId = parseInt(req.url.split("/")[2]);
        let product = products.find((item) => item.id == reqId);

        if (product) {
        res.end(JSON.stringify(product));
        } else {
        res.end("No Products Founded!");
        }
    }

    else if (path.startsWith('/products/') && method === 'PUT') {
        const id = parseInt(path.split('/')[2]);
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
        const updatedProduct = JSON.parse(body);
        products = products.map(p => p.id === id ? { ...p, ...updatedProduct } : p);
        res.writeHead(200);
        res.end(JSON.stringify(updatedProduct));
        })
    }

    else if (path === '/products' && method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const product = JSON.parse(body);
      products.push(product);
      res.end(JSON.stringify(product));
    })


  }


});


server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});