const fs = require('fs')

//Blocking, synchronous
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8', (err, data)=> {console.log(data)} )

const textOut = `This is text` + `${textIn}, created ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)

// Non-blocking

fs.readFile('./txt/start.txt', (err, data)=> {
  
})