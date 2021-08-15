// http - модуль позволяет создавать свои собственные http сервера
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>Hello from NodeJS</h1>')
  res.end(`
  <div style="background: red; width: 200px; height: 200px">End</div>
  `)
})

// запускаем сервер
server.listen(3000, () => {
  console.log('Server is running...')
})