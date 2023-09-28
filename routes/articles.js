const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/', async (req, res) => {
  let articles

  try{
    articles = await Article.find().sort({ createdAt: 'desc' })
  } catch(err){
    cosole.log(err.message)
  }

  res.render('articles/index', { articles: articles })
})

router.get('/new', (req, res) => {
  res.render('articles/new', {article: new Article()})
})

router.get('/edit/:id', async (req, res) => {
  let article

  try{
    article = await Article.findById(req.params.id)
  } catch (err) {
    res.redirect('/articles')
  }
  
  res.render('articles/edit', {article: article})
})

router.get('/:slug', async (req, res) => {
  let article;
  try{
    article = await Article.findOne({slug: req.params.slug})
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
    res.redirect(`/articles/${result.slug}`)
  } catch (err){
    console.log(err)
    res.render('articles/new', {article: {title, description, markdown}})
  }
})

router.put('/:id', async (req, res) => {
  const { title, description, markdown } = req.body
  let article

  try{
    article = await Article.findById(req.params.id)
    article.title = title
    article.description = description
    article.markdown = markdown
    article.save()
    res.redirect(`/articles/${article.slug}`)
  } catch (err){
    console.log(err)
    res.render(`articles/edit`, {article: {title, description, markdown}})
  }
})

router.delete('/:id', async (req, res) => {
  try{
    await Article.findByIdAndDelete(req.params.id)
  } catch (err) {
    console.log(err)
  }

  res.redirect('/articles')
})

module.exports = router