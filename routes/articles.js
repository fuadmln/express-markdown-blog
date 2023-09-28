const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/new', (req, res) => {
  res.render('articles/new', {article: new Article()})
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
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