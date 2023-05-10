import mongooseDBConnect from './dbConnect'
import Article from '../models/Article.model'

const createArticle = async () => {
  try {
    await mongooseDBConnect()
    const article = await Article.create({
      title: 'Liam has a new job',
      likes: 2,
      shares: 0,
    })
  } catch (e) {
    console.error(e)
  }
}

export default createArticle
