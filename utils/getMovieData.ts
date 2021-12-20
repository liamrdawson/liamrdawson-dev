import mongooseDBConnect from './dbConnect'
import Movie from '../models/Movie'

const getMovieData = async () => {
  await mongooseDBConnect()
  const dataArray = []
  const result = await Movie.findOne({ title: 'The Italian' })
  const data = JSON.parse(JSON.stringify(result))
  dataArray.push(data)
  return dataArray
}

export default getMovieData
