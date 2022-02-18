import mongooseDBConnect from './dbConnect'
import Article from '../models/Article.model'

export const createArticle = async () => {
  try {
    await mongooseDBConnect()
    const article = await Article.create({
      title: 'Liam has a new job',
      likes: 2,
      shares: 0,
    })
    console.log(article)
  } catch (e) {
    console.error(e)
  }
}

export const getArticles = async () => {
  try {
    await mongooseDBConnect()
    const articles = await Article.find()
    console.log(articles)
    return articles
  } catch (e) {
    console.error(e)
  }
}
