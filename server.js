const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('start')
})

app.listen(3000, () => console.log(`Server strated in port 3000`))
