const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(express.json()) // this middleware is used if you want to send request through body req.body
app.use(cors());

// available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


// app.get('/', (req, res) => {
//   res.send('Hello Abhishek!')
// })

app.listen(port, () => {
  console.log(`iNotebook backend app listening on port ${port}`)
})