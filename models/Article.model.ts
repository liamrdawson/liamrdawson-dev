import mongoose from 'mongoose'

const article = new mongoose.Schema({
  title: String,
  likes: Number,
  shares: Number,
})

const Article = mongoose.model('article', article)

export default Article
