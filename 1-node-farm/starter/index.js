const fs = require('fs')
const http = require('http');
const url = require('url');
// //Blocking, synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8', (err, data)=> {console.log(data)} )

// const textOut = `This is text` + `${textIn}, created ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)

// // Non-blocking

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=> {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=> {
//     console.log(data2)
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3)=> {
//       console.log(data3)
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err=> {console.log('Your file has been written')})
//     })
//   })
// })

// console.log('Will read file!')
// Server stuff:

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=> {
  console.log(req.url)

  const pathname = req.url

  if (pathname=== '/overview' || pathname === '/') {
    res.end('This is the OVERVIEW!')
  } else if (pathname === '/product') {
    res.end('This is the PRODUCT!')
  } else if (pathname === '/api'){
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(data)
  }else {
    res.writeHead(404, {'Content-type': 'text/html'})
    res.end('<h1>Page not found!</h1>')
  }

  res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', ()=> {
  console.log('server has started, listening on port 8000');
});