const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/expressblog')
db = mongoose.connection
db.once('open', () => console.log('MongoDB database connection established successfully'))
db.on('error', (error) => console.error(error))

const articleRouter = require('./routes/articles')

app.use(express.urlencoded({ extended: false}))
app.set('view engine', 'ejs')
app.use('/articles', articleRouter)

app.get('/articles', (req, res) => {
  const articles = [
    {
      title: 'Blog Title',
      createdAt: new Date(),
      description: 'Blog descriptions'
    },
    {
      title: 'Second Title',
      createdAt: new Date(),
      description: 'Another descriptions'
    }
  ]
  res.render('articles/index', { articles: articles })
})

app.listen(3000, () => console.log(`Server strated in port 3000`))
