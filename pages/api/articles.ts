import type { NextApiRequest, NextApiResponse } from 'next'
import getArticles from '../../utils/createArticle'

const articlesData = async (req: NextApiRequest, res: NextApiResponse) => {
  const articles = await getArticles()
  res.json({ articles })
}

export default articlesData
