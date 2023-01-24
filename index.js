const express = require("express")
const app = express()
const port = 3636

app.get('/',(req, res) => {
    res.status(200).send(`
        <h1>Hola mundo</h1>
        <p>Ejemplo de servidor en express</p>
    `)
})

app.listen(port, _ => {
    console.log(`Server run in port: ${port}`)
})