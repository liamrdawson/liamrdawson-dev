import type { NextApiRequest, NextApiResponse } from 'next'
import getMovieData from '../../utils/getMovieData'

const movieData = async (req: NextApiRequest, res: NextApiResponse) => {
  const movies = await getMovieData()
  res.json({ movies })
}

export default movieData
