const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/', async (req, res) => {
  let articles
  try{
    articles = await Article.find().sort({
      createdAt: 'desc'
    })
  } catch(err){
    cosole.log(err.message)
  }
  res.render('articles/index', { articles: articles })
})

router.get('/new', (req, res) => {
  res.render('articles/new', {article: new Article()})
})

router.get('/:id', async (req, res) => {
  let article;
  try{
    article = await Article.findById(req.params.id)
  } catch(err) {
    console.log(err.message)
  }

  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article})
})

router.post('/', async (req, res) => {
  const { title, description, markdown } = req.body
  
  const article = new Article({
    title,
    description,
    markdown
  })

  try{
    const result = await article.save()
    res.redirect(`/articles/${result.id}`)
  } catch (err){
    console.log(err)
    res.render('articles/new', {article: {title, description, markdown}})
  }
})

module.exports = router