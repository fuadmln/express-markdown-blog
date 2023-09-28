const express = require('express')
const app = express()

const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)

app.get('/', (req, res) => {
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
  res.render('index', { articles: articles })
})

app.listen(3000, () => console.log(`Server strated in port 3000`))
