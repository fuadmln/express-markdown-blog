const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/expressblog')
db = mongoose.connection
db.once('open', () => console.log('MongoDB database connection established successfully'))
db.on('error', (error) => console.error(error))


app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.listen(3000, () => console.log(`Server strated in port 3000`))
