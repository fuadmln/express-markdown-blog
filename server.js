const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DB_URL)
db = mongoose.connection
db.once('open', () => console.log('MongoDB database connection established successfully'))
db.on('error', (error) => console.error(error))


app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.listen(process.env.PORT, () => console.log(`Server strated in port ${process.env.PORT}`))
