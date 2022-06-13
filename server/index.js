const server = require('./server')
const port = 3001;
// const PORT = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server is listening on port:${port}`))