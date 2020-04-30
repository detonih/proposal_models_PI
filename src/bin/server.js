const server = require('../app')

const PORT = 8080 || process.env.PORT

server.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})